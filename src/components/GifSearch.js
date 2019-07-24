import React, {Component} from 'react'


class GifList extends Component {
  state = {search: ""}

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value="search" onChange={this.handleSearch}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default GifList
