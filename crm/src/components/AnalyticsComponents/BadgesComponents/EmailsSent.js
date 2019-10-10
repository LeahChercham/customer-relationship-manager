import React, { Component } from 'react';

class EmailsSent extends Component {

    render() {
        let numberOfEmailsSent = this.props.clients.filter(c => c.emailType !== null).length
        return (
            <div className="badgeDiv">
            <div className="badgeIcon">ICON</div>
            <div className="badgeValue">{numberOfEmailsSent}</div>
            <div className="badgeInfo">Emails sent</div>
        </div>
        );
    }
}

export default EmailsSent;