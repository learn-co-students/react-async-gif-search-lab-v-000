import React, {Component} from 'react'

export default class GifSearch extends Component {
    state = {search_term: ""}

    changeState = (e) => {
        this.setState({
            search_term: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.search_term);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search.." id="search_term" value={this.state.search_term} onChange={this.changeState} />
            </form>
        )
    }
}