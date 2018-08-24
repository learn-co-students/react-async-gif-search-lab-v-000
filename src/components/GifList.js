import React from 'react'

const GiftList = ( props ) => {

  return (
    <div>
      <ul>
        {this.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
      <ul>
    </div>
  )
}

export default GiftList
