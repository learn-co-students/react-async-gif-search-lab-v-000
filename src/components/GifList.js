import React from 'react'

const GifList = props => {
    return(
      <ul>
        {props.gifs.map((gif, index) => 
          <li key={index}>
            <img src={gif.images.original.url} alt={gif.title}/>
          </li>
        )}
      </ul>
    )
}

export default GifList