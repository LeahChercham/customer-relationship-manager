import React, { Component } from 'react';
import Modal from './Modal';
import moment from 'moment'
import { directive } from '@babel/types';

class Client extends Component {
    constructor(){
        super()
        this.state = {
            showModal : false
        }
    }

    openModal = () => {
        console.log(this.props.client)
        this.setState({showModal : true})
    }
    closeModal = () => {
        console.log(this.props.client)
        this.setState({showModal : false})
    }

    render() {
        let client = this.props.client
        let date = moment(client.firstContact).format("MMM Do YY")
        return (
                <tr className="oneClientInformationRow" >
                    <td onClick={this.openModal}>{client.name}</td>
                    <td onClick={this.openModal}>{client.email}</td>
                    <td onClick={this.openModal}>{client.country}</td>
                    <td onClick={this.openModal}>{date}</td>
                    <td onClick={this.openModal}>{client.emailType}</td>
                    <td onClick={this.openModal}>{client.sold ? "Yes" : "No"}</td>
                    <td onClick={this.openModal}>{client.owner}</td>
                    {this.state.showModal ? <Modal client={client} closeModal={this.closeModal} updateClient={this.props.updateClient} getAllClients={this.props.getAllClients}/> : null}
                </tr>
        );
    }
}

export default Client;

