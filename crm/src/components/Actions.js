import React, { Component } from 'react';
import Update from './ActionsComponents/Update';
import Add from './ActionsComponents/Add';
import ClientsInput from './ActionsComponents/ClientsInput';
import axios from 'axios'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            updateClient: {},
            addClient: {},
            showUpdate: false,
        }
    }

    getClientToUpdate = (client) => {
        this.setState({ updateClient: client })
        console.log("User wants to update: " + client.name)
    }

    getAllClients = () => {
        this.getAllClientsData()
    }

    async getAllClientsData() {
        let response = await axios.get("http://localhost:8000/clients")
        let clients = response.data
        this.setState({ clients: clients })
    }

    async componentDidMount() {
        await this.getAllClientsData()
    }

    updateUser = (action, updateData) => {
        let data = {
            _id: this.state.updateClient.id,
            action: action,
            value: updateData[action],
        }
        axios.put('http://localhost:8000/actionUpdatePerson', data).then(
            function (response) { alert("update successful") }).catch(function (error) {
                alert(error + "Couldn't update")
            })
        console.log(data)

    }

    showUpdate = (boolean) => {
        this.setState({ showUpdate: boolean })
    }

    render() {
        return (
            <div className="actionsDiv">
                <div className="actionUpdateDiv">
                    <h3>UPDATE</h3>
                    <ClientsInput showUpdate={this.showUpdate} getClientToUpdate={this.getClientToUpdate} clients={this.state.clients} />
                    {this.state.showUpdate ? <Update updateUser={this.updateUser} /> : null}
                </div>
                <div className="actionAddDiv">
                    <h3>ADD</h3>
                    <Add getAllClients={this.getAllClients} />
                </div>
            </div>
        );
    }
}

export default Actions;