import React from 'react'

// <GifList /> is a presentational component. It receives data from it's props and renders html given
// the input data. It can render a top level <ul> with each gif as an <li>.

class GifList extends React.Component {

render() {

  const show = this.props.gifs.map((gif,index)=>{
    return(
      <li><img key={gif.index} src={gif.url} /> </li>
    )
  })
    return (
      <div>{show}</div>
    );
  }
}

export default GifList
