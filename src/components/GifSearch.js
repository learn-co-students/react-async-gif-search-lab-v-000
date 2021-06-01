import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        search: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            search: event.target.value 
        });
        this.props.fetchGIFs(this.state.search)
    }

    render(){
        return(
            <div>
                <form onChange={this.handleFormSubmit}>
                    <input type="text" name="search" value={this.state.search} />
                    <input type="submit" value="Enter" />
                </form>
            </div>
        )
    }

}

export default GifSearch

//will render a form that receives the user input for the Giphy search
//The text input should be a controlled component that stores the value of the input
// in its component state and renders the DOM accordingly

//props from parent GifListContainer: fetchGIFs={this.fetchGIFs}