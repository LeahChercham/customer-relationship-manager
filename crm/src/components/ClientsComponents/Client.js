import React, { Component } from 'react';

class Client extends Component {
    render() {
        let client = this.props.client
        return (
            <div className="oneClientInformationRow">
                <div>{client.name}</div>
                <div>{client.email}</div>
                <div>{client.country}</div>
                <div>{client.firstContact}</div>
                <div>{client.emailType}</div>
                <div>{client.sold ? "Yes" : "No"}</div>
                <div>{client.owner}</div>
            </div>
        );
    }
}

export default Client;

