import React, { Component } from 'react';
import moment from 'moment';
import { FaChartLine } from 'react-icons/fa'
class NewClients extends Component {
    render() {
        // ==== Test Data
        // let currentMonth = "april"
        // let yyear = 2018
        // let currentYear = yyear.toString(10)
        // ================================

        let currentMonth = new Date().toLocaleString('en-GB', { month: 'long' }).toLowerCase()
        let currentYear = new Date().getFullYear().toString(10)

        let numberOfNewClients = this.props.clients.filter(c => {
            let year = moment(c.firstContact).format('YYYY')
            let month = moment(c.firstContact).format('MMMM').toLowerCase()
            if (year === currentYear && month === currentMonth) {
                return c
            }
        }).length

        return (
            <div className="badgeDiv">
                <div className="badgeIcon"><FaChartLine /></div>
                <div className="badgeText">
                    <div className="badgeValue">{numberOfNewClients}</div>
                    <div className="badgeInfo">New Clients in {currentMonth}</div>
                </div>
            </div>
        );
    }
}

export default NewClients;