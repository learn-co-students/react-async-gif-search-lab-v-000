import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends React.Component {

  state = {
    test: "test works",
    gifs: []
  }

  onFormSubmit = (text) => {
    console.log(text);
    const term = text
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      const temp1 = data.data.slice(0,3)
      console.log(temp1)
      this.setState({
        gifs: temp1
      })
    })
  }

  render() {
  return (
    <div id="GifListContainer">
      <GifSearch onFormSubmit={this.onFormSubmit}/>
      <GifList test={this.state.test} gifs={this.state.gifs}/>
    </div>
  );
}
}

export default GifListContainer
