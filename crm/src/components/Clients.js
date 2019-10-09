import React, { Component } from 'react';
import ClientsTable from './ClientsComponents/ClientsTable';


class Clients extends Component {

    render() {
        return (
            <div>
                <ClientsTable 
                clients={this.props.data} 
                updateClient={this.props.updateClient} 
                /> 
            </div>
        );
    }
}

export default Clients;