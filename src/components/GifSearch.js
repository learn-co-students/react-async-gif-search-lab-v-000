import React from 'react'
 
class GifSearch extends React.Component {
    state = {
        search: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
      }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                <button type="submit">Search</button>
            </form>
        )
    }


}