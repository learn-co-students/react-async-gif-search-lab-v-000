import React from 'react';

export default class GifSearch extends React.Component {
  state = {
    search: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
               name='search'
               onChange={event => this.setState({search: event.target.value})}
               value={this.state.search}>
        </input>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
