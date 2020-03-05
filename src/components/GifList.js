import React from 'react'

export default class GifList extends React.Component {

  render() {
    return(
      <ul>
        {this.props.urls.map((url, index) => (
          <li key={index}>
            <img src={url} alt="gif"></img>
          </li>
        ))}
      </ul>
    )
  }
}
