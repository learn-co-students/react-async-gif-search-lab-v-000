import React from 'react'

export default class GifList extends React.Component {

  render(){
    return this.props.gifs.map(x => <img key={x.url} src={x.url}/> )
  }
 
}