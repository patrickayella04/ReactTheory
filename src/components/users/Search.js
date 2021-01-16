import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    };
    
    onSubmit = e =>  {
        e.preventDefault();
        //console.log(this.state.text); // We need to pass this infomation up to the main App component through props. Do we re-write the code with a function that we call searchUsers as this.props.searchUsers(this.state.text). 
        this.props.searchUsers(this.state.text)
        // Then here we clear the form after -
        this.setState({text: ''}) // setting local/component text to nothing.
    }
    
    // We can't actually type in the input value because its a controlled component. So we need to have an onChange event for when we type in the input value area so when it fires off it will update the state.

    onChange = (e) => { // for this onChange method we want to setState
        this.setState({ text: e.target.value }); 
        // this.setState({ [e.target.name]: e.target.value }); // To avoide having to write a this.onChange for each input, we can change the setState to [e.target.whatever it is we are changeing]
    }

    // When you have a form in react usally we will want to attatch state to the input. 
    render() {
        const { showClear, clearUsers } = this.props; 

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text}
                        onChange={this.onChange}
                    />
                    
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
                
            </div>
        )
    }
}

export default Search
