import React from 'react'




const GifList = (props) => {
  let three = props.gifs.map((gif) => {
    return (`<li>${gif}</li>`)
  })

  return (
    <div>
      <ul>
        {three}
      </ul>
      </div>
  )
}

export default GifList
