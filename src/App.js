import React, {Component} from 'react';
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

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Hello from React</h1>
      </div>
    );
  }
}

export default App;
