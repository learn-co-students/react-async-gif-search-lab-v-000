import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super();
    
        this.state = {
          query: ""
        };
    }
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        let formData = {query: this.state.query}
        if (formData.query) {
            this.props.handleSearch(formData)
            this.setState({
                query: ""
            })
        }
    }

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>Enter a Search Term:</label><br />
                <input id="query" name="query" type="text" value={this.state.query} onChange={this.handleInputChange}></input><br />
                <button type="submit" className="btn btn-success">Find Gifs</button>
            </form>
        )
    }

}

export default GifSearch