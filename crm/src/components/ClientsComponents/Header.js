import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <tr className="clientsHeader" >
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>First Contact</th>
                <th>Email Type</th>
                <th>Sold</th>
                <th>Owner</th>
            </tr>

        );
    }
}

export default Header;