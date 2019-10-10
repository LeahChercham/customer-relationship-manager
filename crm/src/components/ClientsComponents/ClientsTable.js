import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';
import axios from 'axios'
import Header from './Header';

class ClientsTable extends Component {
    constructor() {
        super()
        this.state = {
            index: { first: 0, last: 20 }, 
            clients: [],
            justTwentyClients: [],
            found: [],
        }
    }

    getAllClients = () => {
        this.getAllClientsData()
    }

    async getAllClientsData () {
    let response = await axios.get("http://localhost:8000/clients")
    let clients = response.data
    let TwentyClients = [...clients]
    let found = [...clients]
    let justTwentyClients = TwentyClients.slice(this.state.index.first, this.state.index.last)
    found = found.slice(this.state.index.first, this.state.index.last)
    await this.setState({clients : clients, justTwentyClients: justTwentyClients, found:found})
  }

  async componentDidMount(){
    await this.getAllClientsData()}


    setClientsToFound = (found) => {
        this.setState({found:found})
    }

    changeTwentyClients = (event) => {
        let index = this.state.index
        let action = event.currentTarget.name
        let number

        action === "previous" ? number = -20 : number = +20
        let newFirst = index.first + number
        let newLast = index.last + number
        let newIndex = { first: newFirst, last: newLast }

        this.setState({ index: newIndex }, function() {
            let clients = this.state.clients.slice(this.state.index.first, this.state.index.last)
            this.setState({ found: clients, justTwentyClients: clients })
        })
    }


    render() {
        return (
            <div id="clientsTable">
                <Search clients={this.state.justTwentyClients} setClientsToFound={this.setClientsToFound}/>
                {this.state.index.first === 0 ?
                    null :
                    <button onClick={this.changeTwentyClients} name="previous">See previous 20</button>
                }
                <button onClick={this.changeTwentyClients} name="next">See next 20</button>
                <table>
                    <thead>
                <Header />
                    </thead>
                    <tbody>

                {this.state.found.map(c => <Client updateClient={this.props.updateClient} client={c} key={c._id} getAllClients={this.getAllClients}/>)}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ClientsTable;