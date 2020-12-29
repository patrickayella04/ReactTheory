import React, { Component } from 'react'

class UserItem extends Component {

    // Severals ways to add state to a class based component. One is using a Constructor which isn't really recomended usless your need to us it for something else. It's basically a funcitons that will run when the component runs. 
    //constructor() {
    //super(); // We must call the function super() first which calls parent class constructor.
    // console.log(123) // We are loging 123 in console because the constructor fires off as soon as the component works. 
    //this.state = { // state is just a javaScript object. 
    //   id: 'id',
    //   login: 'mojombo',
    //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //   html_url:'https://github.com/mojombo'
    // } // We have this information in our state object, so lets say we want to use it in our render below. We now have the avatar_url displayed in the component which is is stored in the component level state. 
    //}
      // We dont need to create a constructor to create state. We can just write state as below. 
    state = { // state is just a javaScript object. 
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    };
    
    
    // We continuously write this.state so we it's recomended we destructure below. const {login, avatar_url, html_url} = this.state;
    render() {
        const { login, avatar_url, html_url } = this.state;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} /> 
                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
