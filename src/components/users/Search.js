import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Search = ({searchUsers, showClear, clearUsers, setAlert}) =>  {
    const [text, setText] = useState(''); // The way useState works is by destructring. First pull out text or what ever you want to call this piece of state. Then call a method to change the state called setText so usally "set" and then followed by the name of the piece of state. Then set it to equal setState() and we within the parenthasis we put in a default value. In this case it will be an empty string(blank). 


    // This component isn't a class anymore, so if we want a function within a function we add const at the begining.
    const onSubmit = e => {
        e.preventDefault();
        
        if (this.state.text === '') {
            setAlert('Please enter something', 'light')
        } else {
           searchUsers(text)
            setText(''); // setting local/component text to nothing.
        }
    }
    
    const onChange = e => { 
        this.setState(e.target.value);
    }
        
    return (
        <div>
            <form onSubmi t={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange} />
                <input type="submit" 
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear
                </button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
