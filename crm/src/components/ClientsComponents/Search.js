import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            search:{text: "", value:"name"},
            found:[]
        }
    }

    handleInput = (e) => {
        let newSearch = {...this.state.search}
        newSearch.text = e.target.value
        this.setState({search: newSearch}, this.search(this.state.search.value, newSearch.text))
    }

    handleChange = (e) => {
        debugger
        let newSearch = {...this.state.search}
        newSearch.value = e.target.value
        this.setState({search : newSearch}, this.search(this.state.search.value, this.state.search.text))
    }

    search = (option, text) => {
        debugger
        let searchArray = text.toLowerCase()
        let them = this.props.clients.map(c =>{
            let value = c[option].toLowerCase()
            if(value.includes(searchArray)){
                return c
            }
        })
        them = them.filter(t => t !== undefined)
        this.setState({found: them}, () => this.props.setClientsToFound(them))
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="search" onChange={this.handleInput} value={this.state.search.text}/>
                <select value={this.state.search.value} onChange={this.handleChange} name="criteria">
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                    <option value="email">Email</option>
                    <option value="owner">Owner</option>
                    <option value="country">Country</option>
                </select>
            </div>
        );
    }
}

export default Search;