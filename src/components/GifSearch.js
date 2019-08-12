import React from 'react';

class GifSearch extends React.Component {

state = { query: '' };

handleSubmit = (event) => {
  event.preventDefault()
  this.props.fetchGifs(this.state.query)
}

  render() {
      return (
        <form action="/search" >
          <input type="text" name="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
      );
    }

}

export default GifSearch;