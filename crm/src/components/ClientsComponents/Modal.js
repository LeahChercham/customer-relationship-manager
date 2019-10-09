import React, { Component } from 'react';

class Modal extends Component {
    closeModal= () => {
        this.props.closeModal()
    }

    render() {
        return (
            <div className="modal">
                <div><button onClick={this.closeModal}>Close Modal</button></div>
                <div>Pop up for {this.props.client.name}</div>
            </div>
        );
    }
}

export default Modal;