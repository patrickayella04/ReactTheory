import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext)


    const [text, setText] = useState(''); // The way useState works is by destructring. First pull out text or what ever you want to call this piece of state. Then call a method to change the state called setText so usally "set" and then followed by the name of the piece of state. Then set it to equal setState() and we within the parenthasis we put in a default value. In this case it will be an empty string(blank). 


    // This component isn't a class anymore, so if we want a function within a function we add const at the begining.
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
           githubContext.searchUsers(text)
            setText(''); // setting local/component text to nothing.
        }
    }
    
    const onChange = e => setText(e.target.value);

        
    return (
        <div>
            <form onSubmit ={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange} />
                <input
                    type="submit" 
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
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
