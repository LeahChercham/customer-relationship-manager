import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

class SalesBy extends Component {

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
            countries.push({[k] : 0})
        })
        keys.forEach(k => {
           let number = obj[k].filter(c => c.sold === true).length
           countries[k] = number
        })
        console.log(countries)
    }

    render() {
        let groupedByCountry = this.props.groupBy(this.props.clients, "country")
        console.log(groupedByCountry)
        this.allCountrySoldData(groupedByCountry)
        // this.turnIntoArray(groupedByCountry)

        return (
            <div>
                {/* <ResponsiveContainer>
                <BarChart width={250} height={100} data={groupedByCountry}>
                    <Bar dataKey='sold' fill='#8884d8' />
                </BarChart>
                </ResponsiveContainer> */}
            </div>
        );
    }
}

export default SalesBy;