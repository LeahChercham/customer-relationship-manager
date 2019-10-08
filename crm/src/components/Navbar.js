import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div className="App-navbar">
                <Link to="/clients">Clients</Link>
                <Link to="/actions">Actions</Link>
                <Link to="/analytics">Analytics</Link>
            </div>
        );
    }
}

export default Navbar;