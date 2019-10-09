import React, { Component } from 'react';
import ClientsTable from './ClientsComponents/ClientsTable';
import axios from 'axios'

class Clients extends Component {
    constructor(){
        super()
        this.state = {
            clients: []
        }
    }

    //  ===== Because when Accessing clients directly from route, data doesn't load
    //     async getAllClients () {
    //     let response = await axios.get("http://localhost:8000/clients")
    //     await this.setState({clients : response.data}, this.render)
    //   }

    //   async componentDidMount(){
    //     await this.getAllClients()}
    

    render() {
        // let clients = this.state.clients
        // this.state.clients ? clients = this.state.clients : clients = this.props.data
        return (
            <div>
                <ClientsTable clients={this.props.data}/>
            </div>
        );
    }
}

export default Clients;