import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class SalesBy extends Component {

    
    render() {
        return (
            <div>
                <BarChart width={250} height={100} data={data}>
                    <Bar dataKey='' fill='#8884d8' />
                </BarChart>
            </div>
        );
    }
}

export default SalesBy;