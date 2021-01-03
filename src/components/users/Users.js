import React from 'react';
import UserItem from './UserItem'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = ({users, loading}) => { // users and loading geting passed into arrow function and destructured as a prop. 
    
   // We deleted the original hard coded state as it's now coming in from the server/api in app.js, and being passed into this components as props. So we then change this.state.users to this.props.users. 
    
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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users

////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import UserItem from './UserItem'

// class Users extends Component {
//     state = {
//         users: [
//             {
//                 id: '1',
//                 login: 'mojombo',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//                 html_url: 'https://github.com/mojombo'
//             },
//             {
//                 id: '2',
//                 login: 'defunkt',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
//                 html_url: 'https://github.com/defunkt'
//             },
//             {
//                 id: '3',
//                 login: 'pjhyett',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
//                 html_url: 'https://github.com/pjhyett'
//             }
//         ]
//     }
//     // Map() is whats called a high order array method which actually takes in a function. Here we use a callback function. This particular function has a paremeter that represents each user which is called user. We call an arrow functions which says for each user we want to render the code written in the function. 

//     // Instead of just outputing a div for each of the users in the state, we want to output a user item which is the component we created before this one in UserItem.js. We pass in the entire user, because what's happening is we are looping through the users in the state, for each one 'user variable represents each user in the array of objects. Then we pass it in as a prop to UserItem. 
//     render() {
//         return (
//             //before
//             // <div>
//             //     {this.state.users.map(user => (
//             //         <div key={user.id}>{user.login}</div>
//             //     ))}
//             // </div>
//             // after
//             // Passing state with Props
//             <div style={userStyle}> 
//                 {this.state.users.map(user => (
//                     <UserItem key={user.id} user = {user} />
//                 ))}
//             </div>


//         )
//     }
// }

// const userStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }

// export default Users