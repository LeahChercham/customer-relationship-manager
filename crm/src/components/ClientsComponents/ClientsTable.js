import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';
import axios from 'axios'

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
        debugger
    let response = await axios.get("http://localhost:8000/clients")
    let clients = response.data
    let TwentyClients = [...clients]
    let justTwentyClients = TwentyClients.slice(this.state.index.first, this.state.index.last)
    this.setState({clients : clients, justTwentyClients: justTwentyClients})
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
        // updateState = (clients, found) => {
        //     this.setState({ clients: clients, index: { first: 0, last: 20 }, found: found })
        // }

    render() {
        // let found = this.props.clients.slice(0,20)
        // let clients = this.props.clients.slice(0, 20)
        // this.updateState(clients, found)
        return (
            <div>
                {/*  Change clients back to this.props.clients if you want to search in all*/}
                <Search clients={this.state.justTwentyClients} setClientsToFound={this.setClientsToFound}/>
                {this.state.index.first === 0 ?
                    null :
                    <button onClick={this.changeTwentyClients} name="previous">See previous 20</button>
                }
                <button onClick={this.changeTwentyClients} name="next">See next 20</button>
                {this.state.justTwentyClients.map(c => <Client updateClient={this.props.updateClient} client={c} key={c._id} getAllClients={this.getAllClients}/>)}
            </div>
        );
    }
}

export default ClientsTable;