import React from 'react'

const  GifList = props =>  {

  return (
      <div>
        {props.gifUrls.map( gif => <li key={Math.random()}><img src={gif.url} alt=''/></li>)}
      </div>
  )
}


export default GifList
