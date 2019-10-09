import React, { Component } from 'react';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            updateData: {
                ownerName: "Barton Ramirez",
                emailType: "A", 
                declareSale: false,
            }
        }
    }
    handleChange = (e) =>  {
        let name = e.target.name
        let value = e.target.value
        let newUpdateData = {...this.state.updateData}
        newUpdateData[name] = value
        this.setState({updateData : newUpdateData})
    }

    handleClick = (e) => {
        let name = e.target.name
        debugger
        this.props.updateUser(name, this.state.updateData)
    }


    render() {
        return (
            <div>
                <div>
                    Transfer ownership to: 
                <select value={this.state.updateData.ownerName} onChange={this.handleChange} name="ownerName">
                        <option value="Barton Ramirez">Barton Ramirez</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Stepherd Stone">Stepherd Stone</option>
                    </select>
                    <button onClick={this.handleClick} name="transferOwner">TRANSFER</button>
                </div>
                <div>
                    Send email: 
                    <select value={this.state.updateData.emailType} onChange={this.handleChange} name="emailType">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <button onClick={this.handleClick} name="sendEmail">SEND</button>
                </div>
                <div>
                    Declare sale! 
                    <button onClick={this.handleClick} name="declareSale">DECLARE</button>
                </div>
            </div>
        ) 
    }
}

export default Update;