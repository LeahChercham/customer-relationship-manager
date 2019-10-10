import React, { Component } from 'react';

class OutstandingClients extends Component {
    render() {
        let outstandingClients = this.props.clients.filter(c => c.sold === false).length
        return (
            <div className="badgeDiv">
                <div className="badgeIcon">ICON</div>
                <div className="badgeValue">{outstandingClients}</div>
                <div className="badgeInfo">Outstanding Clients</div>
            </div>
        );
    }
}

export default OutstandingClients;