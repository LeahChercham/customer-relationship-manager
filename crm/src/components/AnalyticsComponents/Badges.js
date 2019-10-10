import React, { Component } from 'react';
import NewClients from './BadgesComponents/NewClients';
import HottestCountry from './BadgesComponents/HottestCountry';
import EmailsSent from './BadgesComponents/EmailsSent';
import OutstandingClients from './BadgesComponents/OutstandingClients';

class Badges extends Component {
    render() {
        return (
            <div className="badgesContainer">
                <NewClients clients={this.props.clients}/>
                <EmailsSent clients={this.props.clients}/>
                <OutstandingClients clients={this.props.clients}/>
                <HottestCountry clients={this.props.clients}/>
            </div>
        );
    }
}

export default Badges;