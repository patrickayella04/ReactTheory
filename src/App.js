import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from '../src/components/layout/Navbar'
import Users from './components/users/Users'

    

class App extends Component {

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
// function App() {
//   return (
//     <div className="App">
//         <h1>Hello from React</h1>
//     </div>
//   );
// }

// export default App;

// Turing a function based component above into a class based component below. 

//We cannot return directly from a class, so we need to use a Method which is basically a function within a class. And that method needs to be called render(). Render is called a life cycle method, which means the it runs at a certain point when the component is loaded. Render is the only life cycle method which is required because it renders the output of the entire component.

// We have to Extend the core React component to App class. 

// JSX - JavaScript Syntax Extension - syntatical sugar to allow us to write the output of our component in an xml or html fashion. Under the hood JSX is just vanila JavaScript. Rule of thumb is that your JSX has to always have one parent ellement.

// Fragment - to avoid having a div as the parent element in the component, surrounding the jsx, appearing in the dom. We can use React.Fragment instead as the parent element and there will be no extra elements rendered in the dom. It's like a gohst element for comparison.

// Using variables - place variable within render method, and call it in return fragement inside curly braces. 

// If we wanted to add a method that's a part of the App class then we need to use this.myName. The this.keyword is very important because it refers to the current instance of the this object.In this case it pertains to the App class, and its function scope. 

///////////////////////////////////////
// 1. COMPONENT STATE
// Component level state means your state is contained wthin a single component. 