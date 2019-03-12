import React from 'react';

class GifSearch extends React.Component {

  state = {
    query: ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input  type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  }
}

export default GifSearch;
