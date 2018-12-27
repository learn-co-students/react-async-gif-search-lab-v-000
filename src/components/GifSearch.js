import React from 'react'
export default class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.gifFetch(this.state.searchTerm)
    }

    render() {
       
    return (
     <div>
         <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchTerm} id="searchTerm" onChange={this.handleChange} />
            <input type="Submit" value="Find Gifs" />
        </form>
    </div>
    )
    }
}
