import React from 'react'

//presentational component
const GifList = (props) => {

  const renderGifs = () => {
    //if take in props, just use props, not this.props
    //this refers to instance of a class

    return props.gifs.map((gif, id) => {
      return <li key={id}><img src={gif.images.original.url}/></li>
    })
  }

      return (
        <ul>
        {renderGifs()}
        </ul>
      )

}

export default GifList
