import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="search"/>
                <select name="criteria">
                    <option value="Name">Name</option>
                    <option value="Surname">Surname</option>
                    <option value="Email">Email</option>
                    <option value="Owner">Owner</option>
                    <option value="Country">Country</option>
                </select>
            </div>
        );
    }
}

export default Search;