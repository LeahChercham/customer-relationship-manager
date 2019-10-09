import React, { Component } from 'react';
import Modal from './Modal';
import moment from 'moment'

class Client extends Component {
    constructor(){
        super()
        this.state = {
            showModal : false
        }
    }

    openModal = () => {
        this.setState({showModal : true})
    }
    closeModal = () => {
        this.setState({showModal : false})
    }

    render() {
        let client = this.props.client
        let date = moment(client.firstContact).format("MMM Do YY")
        return (
            <div>
            <div className="oneClientInformationRow" onClick={this.openModal}>
                <div>{client.name}</div>
                <div>{client.email}</div>
                <div>{client.country}</div>
                <div>{date}</div>
                <div>{client.emailType}</div>
                <div>{client.sold ? "Yes" : "No"}</div>
                <div>{client.owner}</div>
            </div>
            <hr/>
            {this.state.showModal ? <Modal client={client} closeModal={this.closeModal} updateClient={this.props.updateClient} getAllClients={this.props.getAllClients}/> : null}
            </div>

        );
    }
}

export default Client;

