import React, { Component } from 'react';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            update: {
                clientName: "",
                ownerName: "",
                emailType: ""
            }
        }
    }
    render() {
        return (
            <div>

                <div>
                    Transfer ownership to: 
                <select value={this.state.update.ownerName} onChange={this.handleChange} name="ownerName">
                        <option value="Barton Ramirez">Barton Ramirez</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Stepherd Stone">Stepherd Stone</option>
                    </select>
                    <button>TRANSFER</button>
                </div>
                <div>
                    Send email: 
                    <select value={this.state.update.emailType} onChange={this.handleChange} name="emailType">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <button>SEND</button>
                </div>
                <div>
                    Declare sale! 
                    <button>DECLARE</button>
                </div>
            </div>
        );
    }
}

export default Update;