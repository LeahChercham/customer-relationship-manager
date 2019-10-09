import React, { Component } from 'react';
import Update from './ActionsComponents/Update';
import Add from './ActionsComponents/Add';
import ClientsInput from './ActionsComponents/ClientsInput';
import axios from 'axios'

class Actions extends Component {
    constructor(){
        super()
        this.state = {
            clients: []
        }
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


    render() {
        return (
            <div>
                UPDATE
                 <ClientsInput getAllClients={this.getAllClients} clients={this.state.clients} />
                <Update />
                <Add />
            </div>
        );
    }
}

export default Actions;