import React, { Component } from 'react';
import ClientsTable from './ClientsComponents/ClientsTable';
import axios from 'axios'

class Clients extends Component {
    constructor(){
        debugger
        super()
        this.state = {
            clients: []
        }
    }

    //  ===== Because when Accessing clients directly from route, data doesn't load
        async getAllClients () {
            debugger
        let response = await axios.get("http://localhost:8000/clients")
        this.setState({clients : response.data})
      }

      async componentDidMount(){
          debugger
        await this.getAllClients()}
    

    render() {
        debugger
        return (
            <div>
                {this.state.clients.length === 0 ?
                <ClientsTable clients={this.props.data} updateClient={this.props.updateClient} getAllClients={this.getAllClients}/> : 
                <ClientsTable clients={this.state.clients} updateClient={this.props.updateClient} getAllClients={this.getAllClients}/>
                 }
                
            </div>
        );
    }
}

export default Clients;