import React from 'react';

class GifList extends React.Component {

  render() {
    return(
      <ul>
        <div>{this.props.gifs.map(gif => <li><img alt="img" src={gif.url} /></li>)}</div>
      </ul>
    );
  }

}

 export default GifList;
