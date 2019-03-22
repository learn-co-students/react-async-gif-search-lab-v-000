import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
    	<div>
        <ul>
          <li> <img src={this.props.gif.images.original.url} /> </li>
        </ul>
    	</div>
    );
  }


}

export default GifList;
