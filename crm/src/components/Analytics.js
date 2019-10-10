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

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            )
            return result
        }, {})
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
                <Badges groupBy={this.groupBy} clients={this.state.clients}/>
            <hr/>
                <Charts groupBy={this.groupBy} clients={this.state.clients}/>
            </div>
        );
    }
}

export default Analytics;