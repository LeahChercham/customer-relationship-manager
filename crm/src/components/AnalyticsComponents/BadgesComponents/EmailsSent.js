import React, { Component } from 'react';
import {FaEnvelope} from 'react-icons/fa'

class EmailsSent extends Component {

    render() {
        let numberOfEmailsSent = this.props.clients.filter(c => c.emailType !== null).length
        return (
            <div className="badgeDiv">
            <div className="badgeIcon"><FaEnvelope/></div>
            <div className="badgeText">
            <div className="badgeValue">{numberOfEmailsSent}</div>
            <div className="badgeInfo">Emails sent</div>
            </div>
        </div>
        );
    }
}

export default EmailsSent;