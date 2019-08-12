import React, { Component } from 'react'
// import GifSearch from './GifSearch'


class GifListContainer extends Component {

  state = {
    gifs: []
  }
  // passing that data down to its child, the <GifList> component, as a prop.


  render() {
    return (
      <div>
        gifs={this.state.gifs}

        {/* gifs={this.state.gifs.map(original => original.url)} */}
        {/* {this.state.gifs.map(original => original.url)} */}
      </div>
    );
  }

  // componentDidMount() {
  //   let url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&rating=g"
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(arr => {
  //     this.setState({
  //       gifs: arr.data
  //     })
  //   })
  // }
}


export default GifListContainer