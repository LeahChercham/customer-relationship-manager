import React, { Component } from 'react';

class ClientsInput extends Component {
    render() {
        return (
            <div>
                Client: 
                <input type="text" placeholder="Client Name"  list="data" />
                <datalist id="data">
                    {this.props.clients.map(c => <option value={c.name} key={c._id}/>)}
                </datalist>
            </div>
        );
    }
}

export default ClientsInput;