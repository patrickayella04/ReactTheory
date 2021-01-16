import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from '../src/components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';



class App extends Component {
  state = {
    users: [],
    loading:false  // We have loading as there will be a moment in time before we acually get the data back. While thats fetching we want loading to be true and as soon as its fetched we'll change it back to false. This way if our UI if this data isn't load then lets show a spinner. If i t is loaded then we show data. 
  }
  // componentDidMount() {
  //   axios.get('https://api.github.com/users').then(res => console.log(res.data));
  // } 
  // Refactor code to To async awaite to eliminate use of .then. Because we awaite the request. 
  // async componentDidMount() {
    
  //   // When you are changing state you cannot directly change it like ex. you cannot say this.state.loading = true. That's not the way we do it in react. At least with class based components we have to use this.setState({here we pass in an object with part of the state we want to change}).
  //   this.setState({ loading: true }); // Changes state to true

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);// After we make the request and we get the response. Then we reset the state, by taking users and set it to res.data that we get from the server/API, then we also set loading back to false. ex. this.seState({users: res.data, loading: false}).
  //   this.setState({ users: res.data, loading: false }); // Now that we have these 30 users in state, we want to pass them down into our users component through props. 

  // }
  // Whats Happing? - Once the form is submitted it's calling onSubmit in the Search.js component. Then within the onSubmit method, a prop is set to a function that calls searchUsers method that doesn't exist yet in that component, that passes in the this.state.text. Now in the App.js component the prop searchUsers is set next to Search component to call this.searchUsers to call in the App.js just below here. (This is called prop drilling, sending information up and down to compenents through props which can get messy or confusing- but there is another way :-)
  // Search Github users - We want to make a call to the github endpoint then add the query. 
  searchUsers = async text => { // adding async before the paremter
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);// After we make the request and we get the response. Then we reset the state, by taking users and set it to res.data.items that we get from the server/API, then we also set loading back to false. ex. this.seState({users: res.data.items, loading: false}).
    this.setState({ users: res.data.items, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false }); // In search.js when we click the clear button it will call the prop clearUsers that is catched in App.js which will fire off the method clearUsers here which set the users back to empty by clearing it in the UI. 

  render() {


    return (
      <Fragment> 
        
         <div className="App">
          
          <Navbar />
          
          <div className="container">
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false} />
            <Users loading={this.state.loading} users={this.state.users}/> 
          </div>
            
          </div>
              
        </Fragment>
      );
    
  }
}

export default App;

// Preferably we want to store any app level state, such as our Users, in our app.js(since we are not currently using context or redux, we dont have a centralised store for state, the next best thing is to have it stored in your app.js) This way we can easily send state down to components through props. 

// We create a life cycle method - ComponentDidMount - this will run when the component mounts. React Lifecycle methods are the series of events that happen from the starting of a React component to its ending. 3. componentDidMount()
//ComponentDidMount - 
// Now the component has been mounted. This is the time where the next lifecycle method componentDidMount come in to play.

// This method is named as soon because the component is mounted and prepared. This is the best place to initiate API calls in order to fetch data from remote servers. In this method, you can use setState which will cause another rendering but It will happen before the browser updates the UI. This is to ensure that the user won’t see the intermediate state.