import React, { Component } from 'react';
import Search from './ClientsComponents/Search';
import ClientsTable from './ClientsComponents/ClientsTable';

class Clients extends Component {
    render() {
        return (
            <div>
                <Search />
                <ClientsTable clients={this.props.data}/>
            </div>
        );
    }
}

export default Clients;