import React, { Component } from 'react';
import Update from './ActionsComponents/Update';
import Add from './ActionsComponents/Add';
import ClientsInput from './ActionsComponents/ClientsInput';
import axios from 'axios'

class Actions extends Component {
    constructor(){
        super()
        this.state = {
            clients: [], 
            updateClient: {},
            addClient: {},
            showUpdate: false,
        }
    }

    getClientToUpdate = (client) => {
        this.setState({updateClient:client})
        console.log("User wants to update: " + client.name)
    }
 
    getAllClients = () => {
        this.getAllClientsData()
    }

    async getAllClientsData () {
    let response = await axios.get("http://localhost:8000/clients")
    let clients = response.data
    this.setState({clients : clients})
  }

  async componentDidMount(){
    await this.getAllClientsData()}

    updateUser = (action, data) => {
        this[action](data)
    }

    showUpdate = (boolean) => {
        this.setState({showUpdate : boolean})
    }


    transferOwner = (data) =>  {
        console.log("transfer" + data.ownerName)
    }

    sendEmail = (data) => {
        console.log("EEEEMAIL" + data.emailType)
    }

    declareSale = (data) => {
        console.log("SALE" + data.declareSale)
    }

    render() {
        return (
            <div>
                UPDATE
                 <ClientsInput showUpdate={this.showUpdate} getClientToUpdate={this.getClientToUpdate} clients={this.state.clients} />
                {this.state.showUpdate ? <Update updateUser={this.updateUser}/> : null }
                <Add />
            </div>
        );
    }
}

export default Actions;