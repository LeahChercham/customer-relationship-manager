import React, { Component } from 'react';
import { FaGlobe } from 'react-icons/fa'
class HottestCountry extends Component {



    render() {
        let soldIsTrueClients = this.props.clients.filter(c => c.sold === true)
        let country = ""
        if (soldIsTrueClients.length > 0) {
            let groupedByCountry = this.props.groupBy(soldIsTrueClients, "country")
            let countries = Object.keys(groupedByCountry)
            let firstCountry = countries[0]
            let countryArray = groupedByCountry[firstCountry]
            let hottestCountry = firstCountry
            countries.forEach(c => {
                if (groupedByCountry[c].length > countryArray.length) {
                    countryArray = groupedByCountry[c]
                    hottestCountry = c
                }
            })
            country = hottestCountry
        }

        return (
            <div className="badgeDiv">
                <div className="badgeIcon"><FaGlobe /></div>
                <div className="badgeText">
                    <div className="badgeValue">{country}</div>
                    <div className="badgeInfo">Hottest Country</div>
                </div>
            </div>
        );
    }
}

export default HottestCountry;