import React from 'react'

const GifList = props =>
  <ul>
    {props.gifs.map(g => (
      <li><img key={g.url} src={g.url} alt='g'/>
      </li>
    ))
    }
  </ul>

export default GifList