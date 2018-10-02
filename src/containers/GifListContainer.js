import React from 'react'

//A container does data fetching and then renders its corresponding sub-component. That’s it.
// In our app the <GifListContainer /> will be responsible for fetching the data from the giphy api,
// storing the first 3 gifs from the response in it's component state, and passing that data down to
// it's child the <GifList> component as a prop.
// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should
// pass down a submit handler function to <GifSearch /> as a prop.

function GifListContainer(props){
  return (
    <div>{ props.title }</div>
  )
}

export default GifListContainer
