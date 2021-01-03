import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from '../src/components/layout/Navbar';
import Users from './components/users/Users';
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
  async componentDidMount() {
    // When you are changing state you cannot directly change it like ex. you cannot say this.state.loading = true. That's not the way we do it in react. At least with class based components we have to use this.setState({here we pass in an object with part of the state we want to change}).
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    console.log(res.data)
  }

  render() {

    return (
      <Fragment> 
        
         <div className="App">
          
          <Navbar />
          
          <div className="container">
          <Users />
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