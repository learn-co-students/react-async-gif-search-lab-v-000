import React from 'react'


//<GifList /> is a presentational component. It receives data from it's props
//and renders html given the input data. It can render a top level <ul> with each gif as an <li>.


const GifList = (props) => {
  
  return (
    <div>
        {props.gifData.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}

export default GifList
