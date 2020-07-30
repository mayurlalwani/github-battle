import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {

    return ( 
        <nav className="navbar bg-primary">
            <h1>{props.title}</h1>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Navbar;