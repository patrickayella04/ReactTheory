import React, { Component } from 'react'

class UserItem extends Component {

    // Severals ways to add state to a class based component. One is using a Constructor which isn't really recomended usless your need to us it for something else. It's basically a funcitons that will run when the component runs. 
  constructor() {
    super(); // We must call the function super() first which calls parent class constructor.
      // console.log(123) // We are loging 123 in console because the constructor fires off as soon as the component works. 
    this.state = { // state is just a javaScript object. 
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url:'https://github.com/mojombo'
    } // We have this information in our state object, so lets say we want to use it in our render below. 
  }

    render() {
        return (
            <div className="card text-center">User Item</div>
        )
    }
}

export default UserItem
