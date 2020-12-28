import React, {Component, Fragment} from 'react';
import './App.css';

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

class App extends Component {

  render() {
    const name = 'John Doe';

    return (
      <Fragment className="App">
        <h1>Hello {name}</h1>
      </Fragment>
    );
  }
}

export default App;
