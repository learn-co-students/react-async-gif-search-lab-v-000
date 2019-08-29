import React from 'react'

class GifList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.gifs.map(url => (<li key={url}> <img src={url}/> </li>))}
        </ul>
      </div>
    )
  }
}

export default GifList
