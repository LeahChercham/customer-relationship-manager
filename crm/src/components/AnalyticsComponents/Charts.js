import React, { Component } from 'react';
import SalesBy from './ChartsComponents/SalesBy';
import TopOwners from './ChartsComponents/TopOwners';

class Charts extends Component {
    render() {
        return (
            <div>
                <SalesBy groupBy={this.props.groupBy} clients={this.props.clients} />
                <TopOwners groupBy={this.props.groupBy} clients={this.props.clients}/>
            </div>
        );
    }
}

export default Charts;