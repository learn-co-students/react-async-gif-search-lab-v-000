import React from 'react';

export default class GifSearch extends React.Component {

  state = {
    queryString: ""
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchGifs(this.state.queryString)
  }

  handleChange = event => {
    this.setState({
      queryString: event.target.value,
    });
  }

  render() {
    return (
      <div>
      <p>Hello from GifSearch</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="Search Query"
            value={this.state.queryString}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }

}
