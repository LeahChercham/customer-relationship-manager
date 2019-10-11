import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import moment from 'moment'

class SalesBy extends Component {
    constructor() {
        super()
        this.state = {
            salesBy: { country: [], firstContact: [], emailType: [], owner: [] },
            data: []
        }
    }

    turnIntoArray = (obj) => {
        let keys = Object.keys(obj)
        keys.forEach(k => {
            k = []
            k.push(obj[k])
        })
        console.log(keys)
    }

    allCountrySoldData = (obj) => {
        let countries = []
        let keys = Object.keys(obj)
        keys.forEach(k => {
            countries.push({ [k]: 0 })
        })
        keys.forEach(k => {
            let number = obj[k].filter(c => c.sold === true).length
            countries[k] = number
        })
        return countries
    }


    crazyShitFunction = () => {
        // All clients where key sold = true
        let clientsSoldTrue = this.props.clients.filter(c => c.sold === true)
        // SalesBy final object with keys: month, owner, emailType, country with a count
        // this.populateSalesBy(clientsSoldTrue, "owner")
        this.populateSalesBy(clientsSoldTrue, "emailType")
        this.populateSalesBy(clientsSoldTrue, "country")
        this.populateSalesByMonth("firstContact")
        this.populateSalesByOwner("owner")
    }

    populateSalesByMonth = (property) => {
        let monthClients = this.props.clients.filter(c => c.sold === true)

        monthClients.forEach(c => c.firstContact = moment(c.firstContact).format('MM'))
        this.populateSalesBy(monthClients, property)
    }

    populateSalesByOwner = (property) => {
        let clients = [...this.props.clients]
        let ownerClients = clients.filter(c => c.sold === true)
        ownerClients.forEach(c => {
            c.owner = c.owner.split(" ")[0]})
        this.populateSalesBy(ownerClients, property)
    }
    
    populateSalesBy = (clientsSoldTrue, property) => {
        let groupedBy = this.props.groupBy(clientsSoldTrue, property)
        let keys = Object.keys(groupedBy)
        keys.sort()
        let salesBy = { ...this.state.salesBy }
        keys.forEach(k => {
            let propertyObject = { name: k, count: groupedBy[k].length }
            salesBy[property].push(propertyObject)
        })
        this.setState({ salesBy: salesBy })
    }

    componentDidUpdate(prevProps) {
        if (this.props.clients !== prevProps.clients) {
            this.crazyShitFunction()
        }
    }

    handleChange = (e) => {
        let property = e.target.value
        let data = this.state.salesBy[property]
        if (data === undefined) {
            return
        }
        console.log(data)
        this.setState({ data: property })

    }
    render() {
        let options = Object.keys(this.state.salesBy)
        return (
            <div>
                Sales by:
                <input type="text" list="salesByOptions" onChange={this.handleChange} />
                <datalist id="salesByOptions">
                    {options.map(o => <option value={o} />)}
                </datalist>

                {this.state.data === undefined ?
                    <div></div> :

                    <BarChart width={1000} height={300} data={this.state.salesBy[this.state.data]}>
                        <Bar dataKey="count" fill='#8884d8' barSize={30}/>
                        <XAxis dataKey="name" className="xAxisName"/>
                        {/* <YAxis /> */}
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    </BarChart>
                    
                }
            </div>
        );
    }
}

export default SalesBy;