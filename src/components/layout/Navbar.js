import React, { Component } from 'react';
//Prop types is type checking, it will tell you if your prop should be a number, string or an arry, or object or anything like that.We declare proptypes below as static = proptypes..This way props that are passed in are filtered so they are the correct data type of input making your application more robust. Short way to bring in prop types with our extension is type - impt enter :
import PropTypes from 'prop-types'


// Props - are properties that you can pass into a component from outside the component. 
// Default props - if we forget to define or put in props outside this component, we can use default props in the component which can be overriden if developer adds in their own props from outside this component. 

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}/> {this.props.title}   
                </h1>
            </nav>
        )
    }
}

export default Navbar
