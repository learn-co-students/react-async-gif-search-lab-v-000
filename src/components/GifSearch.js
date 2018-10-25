import React from 'react'
import GifListContainer from '../containers/GifListContainer'
export default class GifSearch extends React.Component{
    state = {
        search: "Search"
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchGifs(this.state.search)
    }
    render(){
        return(
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}