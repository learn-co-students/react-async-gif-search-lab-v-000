import React from 'react'

class GifList extends React.Component {
  render(){
    const gifs = this.props.gifs.map((gif, index) =>{
      return <img src={gif.url} key={index} alt={index} />
    })
    return(
      <div>{ gifs }</div>
    )
  }
}
export default GifList
