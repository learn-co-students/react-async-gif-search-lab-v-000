import React from 'react';

class GifSearch extends React.Component {
    state = {
        query: ''
    }

  handleSearchUpdate = event => {
    event.preventDefault()
    this.props.handleSearchSubmit(this.state.query)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchUpdate}>
            <input
                type="text"
                value={this.state.query}
                onChange={ event => this.setState({ query: event.target.value })}
            />
            <input type="submit" />

        </form>
      </div>
    )
  }
}

export default GifSearch;