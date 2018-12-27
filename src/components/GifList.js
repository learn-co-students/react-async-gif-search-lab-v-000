import React from 'react'

export default class GifList extends React.Component {

  generateLIs = () => {
    return this.props.gifList.map((gif) => (<li><img src={gif.url} alt="gif"/></li>))
  }

  render() {
    console.log("gifList", this.props)
    return(
      <div>
        <ul>
        {this.generateLIs()}
        </ul>
      </div>
    )
  }
}
