import React, { Component } from "react";

class GifSearch extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
            this.setState({
              value: event.target.value
        })
    }

    submitClick = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.value)
    };


    render() {
        return(
            <form onSubmit={this.submitClick} >
                <div>
                    <label>
                    Search For:
                    <input id="query" name="query" type="text" onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">Search</button>
                 </div>
            </form>
        )
    }
}

export default GifSearch