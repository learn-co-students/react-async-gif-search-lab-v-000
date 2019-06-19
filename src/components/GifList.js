import React from 'react';
import GifSearch from '../components/GifSearch'

class GifList extends React.Component {

  render() {
    return(
      <ul>
        {this.props.items.map(item => <li key={item.id}> <img src={item.url} alt={item.type} /></li>)
        }
      </ul>
    )
  }
}

export default GifList;
