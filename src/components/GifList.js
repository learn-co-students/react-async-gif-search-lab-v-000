import React from 'react'

const GifList = (props) => {
  const gifItems = props.gifs.map((g) => {
    return <li><img key={g.url} src={g.url} alt="g" /></li>
  });

  return (
    <ul>{gifItems}</ul>
  )
}

export default GifList
