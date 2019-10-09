import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="clientsHeader" >
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Country</h4>
                <h4>First Contact</h4>
                <h4>Email Type</h4>
                <h4>Sold</h4>
                <h4>Owner</h4>
            </div>

        );
    }
}

export default Header;