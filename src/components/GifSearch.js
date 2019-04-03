import React, {Component} from 'react'

class GifSearch extends Component {

  render() {
    return(
      <React.Fragment>
        <h3>Search</h3>
        <form>
          <input onChange={this.props.handleChange} type="text" id="input" value={this.props.query} />
          <button onClick={this.props.handleSearch} type="button" id="button">Go!</button>
        </form>
      </React.Fragment>
    )
  }
}

export default GifSearch;
