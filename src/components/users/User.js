import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';



const User = ({  match }) => {

    const githubContext = useContext(GithubContext);
    
    const { user, getUser, loading, getUserRepos, repos } = githubContext;
    
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    },[]); // When you want to run something when the component mounts, use useEffect and a empty set of brackets to stop continuous loop/reload of requests. // eslint-disable-next-line will disable any warnings for your to put dependencies in brackets. As by doing so we re-start the continuous loop/reload again [getUser, getUserRepos]. However we can and will add dependancies but not ones that cause it to loop/reload.

        const  {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = user;

    
        if (loading) return <Spinner />;

    return (
        
        <Fragment >
            
            <Link to='/' className='btn btn-light'> 
                Back to Search
            </Link>
            Hireable:{' '}
            {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />  
            }
            <div className="card grid-2">
                <div className="all-center">
                   
                    <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Vist Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
        
    )
        
        
   
}



export default User;

// If we used a regular <a> tag instead of <Link/>, when we click on back to search button, home page will no longer have the users we searched for. But with Link it will still have the original state from which we left. 


