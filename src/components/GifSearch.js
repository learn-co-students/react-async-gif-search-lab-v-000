import React from 'react';

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchInput(this.state.query)
  }

  handleChange = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default GifSearch;
