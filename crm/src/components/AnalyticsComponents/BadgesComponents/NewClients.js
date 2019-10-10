import React, { Component } from 'react';
import moment from 'moment';

class NewClients extends Component {
    render() {
        // test data
        // let currentMonth = "april"
        // let yyear = 2018
        // let currentYear = yyear.toString(10)


        let currentMonth = new Date().toLocaleString('en-GB', { month: 'long' }).toLowerCase()
        let currentYear = new Date().getFullYear().toString(10)

        let numberOfNewClients = this.props.clients.filter(c => {
            let year = moment(c.firstContact).format('YYYY')
            let month = moment(c.firstContact).format('MMMM').toLowerCase()
            if (year === currentYear && month === currentMonth) {
                return c
            }
        }).length

        console.log(numberOfNewClients)

        return (
            <div className="badgeDiv">
                <div className="badgeIcon">ICON</div>
                <div className="badgeValue">{numberOfNewClients}</div>
                <div className="badgeInfo">New {currentMonth} Clients</div>
            </div>
        );
    }
}

export default NewClients;