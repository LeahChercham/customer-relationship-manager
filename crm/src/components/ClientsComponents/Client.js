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
            <tr className="oneClientInformationRow" onClick={this.openModal}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.country}</td>
                <td>{date}</td>
                <td>{client.emailType}</td>
                <td>{client.sold ? "Yes" : "No"}</td>
                <td>{client.owner}</td>

            {this.state.showModal ? <Modal client={client} closeModal={this.closeModal} updateClient={this.props.updateClient} getAllClients={this.props.getAllClients}/> : null}
            </tr>

        );
    }
}

export default Client;

