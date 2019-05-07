import React, { Component } from 'react';

class GifList extends Component {
  render() {
    const itemCards = this.props.items.map(item => <img src= {item.url}/>)

      return (
        <div>
          {itemCards}
        </div>
      );
    }
  }


export default GifList
