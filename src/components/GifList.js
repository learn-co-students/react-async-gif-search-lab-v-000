import React from 'react'

const GifList = ({gifs}) => {
  const gifList = gifs.map((gif, i) => <li key={i}>{gif.url}</li>)
  return <ul className="gifs">{gifList}</ul>
}

export default GifList
