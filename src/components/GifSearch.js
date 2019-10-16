import React from "react";

class GifSearch extends React.Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter a Search Term:</p>
        <input
          type="text"
          value={this.state.query}
          onChange={event => this.setState({ query: event.target.value })}
        />
      </form>
    );
  }
}

export default GifSearch;
