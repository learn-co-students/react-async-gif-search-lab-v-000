import React from 'react'

class GifList extends React.Component {

  genGifList = () => {
    const temp2 = this.props.gifs
    return <li>Generate list here</li>

  }

  genGifyList = () => {
    console.log('this is working')
    return this.props.gifs.map((item, key) =>(<li key={key}>
      <img key={item.images.original.url} src={item.images.original.url} alt="gif"/>
      </li>))
  }

  render() {
  return (
    <div id="GifListtest">
    This is the Giflist...
      <div id="Giflist">
        <ul>
        {this.genGifyList()}
        </ul>
      </div>

    </div>
  );
}
}

export default GifList
