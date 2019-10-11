import React, { Component } from 'react';

class Modal extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",
            country : "",
        }
    }
    closeModal= () => {
        this.props.closeModal()
    }
    
    handleInput = (e) => {
        let name = e.target.name
        let input = e.target.value
        this.setState({ [name] : input})
    }
    
    updateClient = async () => {
        let newClient = {...this.props.client}
        newClient.name = this.state.name
        newClient.email = this.state.email
        newClient.country = this.state.country
        await this.props.updateClient(newClient)
        this.props.getAllClients()
        this.closeModal()
    }

    render() {
        return (
            <div className="modal">
                <div>
                <span ><button id="closeModalButton" onClick={this.closeModal}>X</button></span>
                    </div>               
                <input type="text" name="name" placeholder={this.props.client.name} value={this.state.name} onChange={this.handleInput}/>
                <br/>
                <input type="text" name="email" placeholder={this.props.client.email} value={this.state.email} onChange={this.handleInput}/>
                <br/>
                <input type="text" name="country" placeholder={this.props.client.country} value={this.state.country} onChange={this.handleInput}/>
                <br/>
                <button onClick={this.updateClient}>Update</button>
            </div>
        );
    }
}

export default Modal;