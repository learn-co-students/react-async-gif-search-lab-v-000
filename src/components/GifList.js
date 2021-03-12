import React from 'react';

class GifList extends React.Component {
  
  
  render() {
    return(
      <ul>
        <li>img src={this.props.gifs[0]}</li>
        <li>img src={this.props.gifs[1]}</li>
        <li>img src={this.props.gifs[2]}</li>
      </ul>
      )
  }
}

export default GifList