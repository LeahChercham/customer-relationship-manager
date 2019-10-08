import React, { Component } from 'react';
import Client from './Client';

class ClientsTable extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            index: { first: 0, last: 20 }
        }
    }

    componentDidMount() {
        this.setState({ clients: this.props.clients.slice(0, 20), index: { first: 0, last: 20 } })
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
            let clients = this.props.clients.slice(index.first, index.last)
            this.setState({ clients: clients })
        })
    }

    render() {
        return (
            <div>
                {this.state.index.first === 0 ?
                    null :
                    <button onClick={this.changeTwentyClients} name="previous">See previous 20</button>
                }
                <button onClick={this.changeTwentyClients} name="next">See next 20</button>
                {this.state.clients.map(c => <Client client={c} key={c._id} />)}
            </div>
        );
    }
}

export default ClientsTable;