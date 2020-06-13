import React, { Component} from 'react';

class GifSearch extends Component {

    state = {
        search: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchGifs(this.state.search)
    }

    handleChange = (event) => {
        this.setState({
          search: event.target.value
        })
    }


    render() {
        return (
        	<form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.search} onChange={this.handleChange} />
                <button type="submit" class="btn btn-primary">Find Gifs</button>
            </form>
            
        );
    }
}

export default GifSearch;
