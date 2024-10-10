import React, { Component } from 'react'
import importedNames from '../names.js'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: importedNames

        }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        // console.log(inputText)
        const filteredNames = importedNames.filter(name => name.toLowerCase().includes(inputText))

        this.setState({ names: filteredNames })
    }


    render() {
        return (
            <div>
                <h1>Name search</h1>
                <p>matching names found: {this.state.names.length}</p>
                <form>
                    <input type="text" placeholder="Search names..." onChange={(event) => this.handleChange(event)} />
                </form>
                <div style={{ margin: 'auto' }}>
                    {this.state.names.map(name => {
                        return <p key={name}>{name}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default SearchBar