import React from 'react'

const GifList = ({gifs}) => {
  const gifList = gifs.map((gif, i) => <li key={i}><img src={gif.images.original.url} alt={gif.slug} height="200"/></li>)
  return <ul className="gifs">{gifList}</ul>
}

export default GifList
