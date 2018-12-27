import React from 'react'

export default class GifList extends React.Component {

  generateLIs = () => {
    this.props.gifList.map((gif) => (<li><img src={gif.url} alt="gif"/></li>)).join("")
  }

  render() {
    return(
      <div>
        <ul>
        {this.generateLIs()}
        </ul>
      </div>
    )
  }
}
