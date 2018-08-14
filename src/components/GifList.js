import React from 'react'

const GifList = ({gifs}) => {
  const gifList = gifs.map(gif => <li><img src={gif.embed_url}/></li>);
  return (
    <ul>{gifList}</ul>
  )
};
export default GifList