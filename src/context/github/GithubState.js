import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

const Githubstate = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async text => {
        
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        
        // setUsers(res.data.items);

        // The payload is the data we want to send to the ruducer. The reducer is responsible for putting the payload into the state and sending it down to any components that need it. 
        dispatch({
            type: SEARCH_USERS, 
            payload: res.data.items
        })
       
      };

    //Get User

    // Get Repos

    // Clear Users

    // Set Loading

    const setLoading = () => dispatch({ type: SET_LOADING }); // Dispatch to our reducer. What we dispatch is an object, that has a type, to the ruducer. 


      // The provider below will take in one prop which will be the Value=. We pass into this prop of Value anything we want to be available to the entire app. For example to get users we get that from state.users, etc. Also all methods will be passed into the provider that will be available to the entire app. 
    
     // In the middle of <GithubContext>{props.children}</GithubContext> we put {props.children} because we are wrapping our entire application in this provider. 
    return <GithubContext.Provider
        value={{
            users: state.users, 
            user: state.user,
            repos: state.repos,
            loading: state.loading, 
            searchUsers
        }}>
        
        {props.children}

    </GithubContext.Provider>
}

export default Githubstate;