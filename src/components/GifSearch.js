import React, {Component} from 'react';

export default class GifSearch extends Component {
    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.findGIFs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="query" value={this.state.query} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
