import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }

    render() {
        const { 
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
        public_gist,
        hireable
        } = this.props.user;

       
        const { loading } = this.props;
        if (loading) return <Spinner />;

        return <Fragment>
            
            <Link to='/' className='btn btn-light'> 
                Back to Search
            </Link>
        </Fragment>;
        
    }
}

export default User;

// If we used a regular <a> tag instead of <Link/>, when we click on back to search button, home page will no longer have the users we searched for. But with Link it will still have the original state from which we left. 