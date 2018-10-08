import React from 'react'



// the App component should render out the GifListContainer component 

const GifList = props => {
  return (
    <div>
        { props.gifs }
    </div>
  )
}

export default GifList

