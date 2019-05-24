import React from 'react'

  const GifList = props => {
    return (
        <ul>
        {props.gifs.map(g => <li><img key={g.gif} src={g.url} alt="gif" /></li> )}
        </ul>
      )
  }

export default GifList
