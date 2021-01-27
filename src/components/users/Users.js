import React, {useContext} from 'react';
import UserItem from './UserItem'
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext'; // To use any use context state or actions in ANY component, just import the folder/component, initialise it in the component function below with const githubContext = ..., then you can call it on that object ie. githubContext.blablah.

 
const Users = () => { 
    const githubContext = useContext(GithubContext); // Bring in github context with uppercase (G) GithubContext - and initialise it with lowercase (g) githubContext.

    const { loading, users } = githubContext;
    
    if (loading) { // loading passed in from app.js state
        return <Spinner />
    } else { // return all of the users
        return (
            
            <div style={userStyle}> 
                {users.map(user => (
                    <UserItem key={user.id} user = {user} />
                ))}
            </div>
        )
    }
}



const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users

