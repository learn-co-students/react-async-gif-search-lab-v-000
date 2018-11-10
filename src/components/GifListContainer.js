import React from 'react';
import GifList from './GifList';

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  render() {
    return null
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
      .then(res => res.json())
      .then(json => {this.setState({
        gifs: json.data.slice(0)
      })})
  }

}
