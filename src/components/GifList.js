import React from 'react'



// the App component should render out the GifListContainer component 

const GifList = props => {
  return (
    <div>
        {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}

export default GifList

