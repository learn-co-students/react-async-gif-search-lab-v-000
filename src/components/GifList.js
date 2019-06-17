import React from 'react'

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

// const GiftList = props =>
//   <ul>
//     {props.items.map(item => <li key={item.id}> <img src={item.url} alt={item.type} /></li>)
//     }
//   </ul>

export default GifList
