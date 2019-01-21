// create your App component here

import React, { Component } from 'react';

class GifList extends Component {





  render() {
    if (this.props.data) {
      return (
        <ul>
          <li><img src={this.props.data[0]} alt="gif 1"/></li>
          <li><img src={this.props.data[1]} alt="gif 2" /></li>
          <li><img src={this.props.data[2]} alt="gif 3"/></li>

        </ul>
      )
    }

  }

}

export default GifList;
