import React, { Component } from 'react';


export default class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

render() {
  return(
    <form>
      <input type="text" value={this.state.searchTerm} />
    </form>
    )
}



}
