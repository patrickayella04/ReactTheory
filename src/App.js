import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
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
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/users/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
          </Router>
        </AlertState>
    </Githubstate>
    );
  
}

export default App;



            