import React, { Component } from 'react';
import Badges from './AnalyticsComponents/Badges';

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
                <Badges />
                <Charts />
            </div>
        );
    }
}

export default Analytics;