import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        gifSearchInput: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (<div>
            <input type="text" name="gifSearchInput" value={this.state.gifSearchInput} onChange={this.handleChange}/>
            <button type="submit" name="gifSearchSubmit" onClick={() => this.props.onHandleSearch(this.state.gifSearchInput)} >Submit</button>
        </div>)
    }
}