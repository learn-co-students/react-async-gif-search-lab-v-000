import React from 'react';

class GifList extends React.Component {
  render(){
    return (
      <div>
      {this.props.images.map(image => <img key={image.url} src={image.url} alt="gif"/>)}
      </div>
    )
  }
}
export default GifList;
