import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';

class ClientsTable extends Component {
    constructor() {
        super()
        this.state = {
            index: { first: 0, last: 20 }, 
            clients: [],
            found: [],
        }
    }

    componentDidMount() {
        let found = this.props.clients.slice(0,20)
        this.setState({ clients: this.props.clients.slice(0, 20), index: { first: 0, last: 20 }, found: found })
    }

    setClientsToFound = (found) => {
        debugger
        this.setState({found:found})
    }

    changeTwentyClients = (event) => {
        debugger
        let index = this.state.index
        let action = event.currentTarget.name
        let number

        action === "previous" ? number = -20 : number = +20
        let newFirst = index.first + number
        let newLast = index.last + number
        let newIndex = { first: newFirst, last: newLast }

        this.setState({ index: newIndex }, function() {
            let clients = this.props.clients.slice(this.state.index.first, this.state.index.last)
            this.setState({ found: clients, clients: clients })
        })
    }

    render() {
        return (
            <div>
                {/*  Change clients back to this.props.clients if you want to search in all*/}
                <Search clients={this.state.clients} setClientsToFound={this.setClientsToFound}/>
                {this.state.index.first === 0 ?
                    null :
                    <button onClick={this.changeTwentyClients} name="previous">See previous 20</button>
                }
                <button onClick={this.changeTwentyClients} name="next">See next 20</button>
                {this.state.found.map(c => <Client client={c} key={c._id} />)}
            </div>
        );
    }
}

export default ClientsTable;