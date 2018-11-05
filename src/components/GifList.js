import React from 'react';
 export default class GifList extends React.Component {
   render() {
    return (
      <div>
          {this.props.gifs.map( gif => {
            return (
              <ul>
                <li><img key={gif.images.original.url} src={gif.images.original.url } alt="gif image"/></li>
              </ul>)
            })
      </div>
    )
  }
}
