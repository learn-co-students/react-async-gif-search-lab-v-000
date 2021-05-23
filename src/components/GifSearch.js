import React from 'react'

class GifSearch extends React.Component{
    constructor(){
        super()
        this.state = {
            inputText: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.inputText)
    }

    handleChange = (event) => this.setState({ inputText: event.target.value })

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputText} onChange={this.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default GifSearch
