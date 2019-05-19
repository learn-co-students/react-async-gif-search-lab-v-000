import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formInput: ''
        }
    }

    handleInputChange = event => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchGifs(this.state.formInput)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:
                    <input type='text' name="formInput" value={this.state.formInput} onChange={this.handleInputChange} />
                </label>
                <button>Find Gifs</button>
            </form>
        )
    }

}

export default GifSearch