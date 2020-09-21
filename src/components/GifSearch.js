import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                Enter a Search Term: 
                 
                <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.changeHandler} label="Enter a Search Term:"/>
                <input type="submit" value="Find Gifs" />
            </form>
        )
    }
}


export default GifSearch