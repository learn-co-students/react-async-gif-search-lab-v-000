import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  render() {
    return (
      <div style={{ clear: "both" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.onChangeHandler}
          />
          <button type="button">Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
