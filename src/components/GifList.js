import React, { Component } from 'react';

class GifList extends Component {

  render(){
    return (
      <div className='gifList'>
        { this.props.gifUrls.map( (string) => <img src={ string } alt="giphy_images"></img> ) }
      </div>
    )
  }

}

export default GifList
