import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';



import Githubstate from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
 
    return (
      <Githubstate>
        <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>

              <Route
                exact path='/'
                render={props => (
                <Fragment>
                  <Search  />
                  <Users  />
                </Fragment>
                )} />
              
              <Route exact path='/about' component={About} />
              
              <Route exact path='/users/:login'
                render={props => (
                <User {...props}
                  
                  
                  />
                
              )} />
                
            </Switch>
          </div>
        </div>
          </Router>
        </AlertState>
    </Githubstate>
    );
  
}

export default App;



            