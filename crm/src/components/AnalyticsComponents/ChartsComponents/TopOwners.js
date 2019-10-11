import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { tsImportEqualsDeclaration } from '@babel/types';

class TopOwners extends Component {
    constructor() {
        super()
        this.state = {
            owners: [],
            topOwners: []
        }
    }

    findTopOwners = () => {
        let clients = this.props.clients.filter(c => c.sold === true)
        let groupedByOwner = this.props.groupBy(clients, "owner")
        let keys = Object.keys(groupedByOwner)
        let topOwners = [...this.state.topOwners]
        let owners = [...this.state.owners]
        keys.forEach(k => {
            let ownerObject = { name: k, count: groupedByOwner[k].length }
            owners.push(ownerObject)
        })
        owners.sort((a, b) => (a.count > b.count) ? -1 : 1)
        topOwners = owners.slice(0, 3)
        console.log(topOwners)
        this.setState({ topOwners: topOwners })
    }

    componentDidUpdate(prevProps) {
        if (this.props.clients !== prevProps.clients) {
            this.findTopOwners()
        }
    }

    render() {
        return (
            <div>
                {this.state.topOwners.length > 0 ?
                <BarChart width={500} height={300} data={this.state.topOwners}>
                    <Bar dataKey="count" fill='#8884d8' barSize={30} />
                    <XAxis dataKey="name" className="xAxisName" />
                    <YAxis  />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                </BarChart>
                : 
                <div></div>
            }
            </div>
        );
    }
}

export default TopOwners;