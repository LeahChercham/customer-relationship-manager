import React, { Component } from 'react';
import Badges from './AnalyticsComponents/Badges';
import axios from 'axios'
import Charts from './AnalyticsComponents/Charts';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            clients: []
        }
    }

    async getAllClientsData() {
        let response = await axios.get("http://localhost:8000/clients")
        this.setState({ clients: response.data })
    }

    async componentDidMount() {
        await this.getAllClientsData()
    }

    render() {
        return (
            <div>
                <Badges clients={this.state.clients}/>
            <hr/>
                <Charts clients={this.state.clients}/>
            </div>
        );
    }
}

export default Analytics;