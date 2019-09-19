import React from 'react';

class GifSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="query" value={this.state.query} onChange={this.handleChange}/>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query)
  }
}


export default GifSearch;
