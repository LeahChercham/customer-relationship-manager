import React, { Component } from 'react';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            updateData: {
                owner: "Barton Ramirez",
                emailType: "A", 
                sold: false,
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
        if(name === "sold"){
            let newUpdateData = {...this.state.updateData}
            newUpdateData[name] = true
            this.setState({updateData : newUpdateData}, () => {
                this.props.updateUser(name, this.state.updateData)
            })
        } else {
            this.props.updateUser(name, this.state.updateData)
        }
    }


    render() {
        return (
            <div>
                <div>
                    Transfer ownership to: 
                <select value={this.state.updateData.owner} onChange={this.handleChange} name="owner">
                        <option value="Barton Ramirez">Barton Ramirez</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Stepherd Stone">Stepherd Stone</option>
                    </select>
                    <button onClick={this.handleClick} name="owner">TRANSFER</button>
                </div>
                <div>
                    Send email: 
                    <select value={this.state.updateData.emailType} onChange={this.handleChange} name="emailType">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <button onClick={this.handleClick} name="emailType">SEND</button>
                </div>
                <div>
                    Declare sale! 
                    <button onClick={this.handleClick} name="sold">DECLARE</button>
                </div>
            </div>
        ) 
    }
}

export default Update;