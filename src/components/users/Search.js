import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }; // We can't actually type in the input value because its a controlled component. So we need to have an onChange event for when we type in the input value area so when it fires off it will update the state. 

    
    // When you have a form in react usally we will want to attatch state to the input. 
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
