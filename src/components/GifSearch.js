import React  from 'react';

class GifSearch extends React.Component {
    state = {
        search: ""
    }

handleSubmit = (e) => {
    e.preventDefault()
    this.props.getGifs(this.state.search)

}

render() {
    return (
        <div>
        Enter a Search Term:
        <form onSubmit={this.handleSubmit } id='gif-form'>
            <input 
            type='text'
            value={this.state.search}
            onChange={ (e) => {
                this.setState({
                    search: e.target.value})
                }
             }
            />
        </form>
        <br></br>
        <button onSubmit={this.handleSubmit} form="gif-form" Find Gifs></button>
        </div>
        )
      }
    }


    export default GifSearch;