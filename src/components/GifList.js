import React from 'react'

class GifList extends React.Component {
  // TODO: receives data from it's props renders html given the input data. It can render a top level <ul> with each gif as an <li>.



  render(){
    return (
      <div>
          {this.props.gifs.map( gif => {
            return <img key={gif.images.original.url} src={gif.images.original.url } alt="gif"/>})}
      </div>
    )
  }
}

export default GifList
