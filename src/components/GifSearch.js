import React from 'react';

export default class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
    this.setState({
      query: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.query} onChange={this.handleChange}/>
          <input type='submit' value="Search" />
        </form>
      </div>
    )
  }
}
