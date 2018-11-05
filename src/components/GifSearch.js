import React from 'react';
 export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state= {
      search:  "";
    }
  }
   handleSubmit = (e) => {
    e.preventDefault;
    this.props.onSubmit(this.state)
  }
   handleChange = (e) => {
    this.setState ({ [e.target.name]: e.target.value });
  }
   render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
        <button type="submit">Search</button>
      </form>
    )
  }
}
