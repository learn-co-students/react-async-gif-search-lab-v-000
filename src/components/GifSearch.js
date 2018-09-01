import React from 'react';

class GifSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Query:
                <input type="text" name={this.state.query} onChange={event=> this.setState({query: event.target.value})} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default GifSearch;