import React from 'react'

const GifList = props => (
  <ul className="list-unstyled">
    {props.foundGifs.map( gif => (
      <li key={gif.id}>
        <img alt=" " src={gif.images.fixed_height.url} />
      </li>
    ) )}
  </ul> 
)

export default GifList