
import React from 'react'


const GifList = props =>  {


  const givenGifs = props.firstThreeGifs.map(gif => {
            return <img key={gif.id} src={gif.images.original.url} />
      })



  // render(){
    console.log("props", props)
    // console.log("this.props firstThreeGifs", this.props.firstThreeGifs )
    return(
      <div>
        <ul>
          { givenGifs }
        </ul>
      </div>
    )
  // }

}

export default GifList
// you can put console logs right under the render, but i guess not in the return
