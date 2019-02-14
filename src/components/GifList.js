import React from 'react';

export default class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifList.map((gifSrc,i) => <li key={i}><img src={gifSrc}></img></li>)}
      </ul>
    )
  }
}
