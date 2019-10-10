import React, { Component } from 'react';
import TopEmployees from './ChartsComponents/TopEmployees';
import SalesBy from './ChartsComponents/SalesBy';

class Charts extends Component {
    render() {
        return (
            <div>
                <TopEmployees clients={this.props.clients} />
                <SalesBy groupBy={this.props.groupBy} clients={this.props.clients} />
                
            </div>
        );
    }
}

export default Charts;