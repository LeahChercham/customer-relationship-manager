import React, { Component } from 'react';

class TopOwners extends Component {

    findTopOwners = () => {
        let clients = this.props.clients.filter(c => c.sold === true)
        let groupedByOwner = this.props.groupBy(clients, "owner")
        console.log(groupedByOwner)
    }

    render() {
        this.findTopOwners()
        return (
            <div>
                
            </div>
        );
    }
}

export default TopOwners;