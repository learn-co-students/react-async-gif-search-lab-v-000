import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state={
            query: ""
        }
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.fetchGifs(this.state.query)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <input type="submit" value="Search Gifs" />
            </form>
        )
    }
}