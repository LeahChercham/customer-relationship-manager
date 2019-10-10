import React, { Component } from 'react';
import NewClients from './BadgesComponents/NewClients';
import HottestCountry from './BadgesComponents/HottestCountry';
import EmailsSent from './BadgesComponents/EmailsSent';
import OutstandingClients from './BadgesComponents/OutstandingClients';

class Badges extends Component {
    render() {
        return (
            <div>
                <NewClients clients={this.props.clients}/>
                <HottestCountry />
                <EmailsSent />
                <OutstandingClients />
            </div>
        );
    }
}

export default Badges;