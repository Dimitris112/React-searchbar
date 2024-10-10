import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Name search</h1>
                <form>
                    <input type="text" placeholder="Search names..." />
                </form>
                <div style={{ margin: 'auto' }}>
                    Names will be rendered here
                </div>
            </div>
        )
    }
}

export default SearchBar