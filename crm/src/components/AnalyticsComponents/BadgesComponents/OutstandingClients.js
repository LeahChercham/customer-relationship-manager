import React, { Component } from 'react';
import { FaUserAlt, FaUser } from 'react-icons/fa'

class OutstandingClients extends Component {
    render() {
        let outstandingClients = this.props.clients.filter(c => c.sold === false).length
        return (
            <div className="badgeDiv">
                <div className="badgeIcon"><FaUserAlt /></div>
                <div className="badgeText">
                    <div className="badgeValue">{outstandingClients}</div>
                    <div className="badgeInfo">Outstanding Clients</div>

                </div>
            </div>
        );
    }
}

export default OutstandingClients;