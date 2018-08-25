import React from 'react';

class GifSearch extends React.Component{

  state = {
    query: ""
  }

  handleQueryChange = (e) => {
    e.preventDefault();
    this.props.handleQueryChange(this.state.query)
  }

  handleQueryUpdate = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleQueryChange}>
          <label>Enter a Search Term</label><br />
          <input type="text" value={this.state.query} onChange={this.handleQueryUpdate}/>
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch;
