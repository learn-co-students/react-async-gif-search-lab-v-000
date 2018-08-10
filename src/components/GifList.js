//<GifList /> is a presentational component. It receives data from it's props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

import React, { Component } from 'react';
class GifList extends Component {


  render() {

    return(
      <div>
      <img src={this.props.gif.images.original_still.url} alt={this.props.gif.title} height="150" width="150" />
      </div>

    )
  }

}

export default GifList;
