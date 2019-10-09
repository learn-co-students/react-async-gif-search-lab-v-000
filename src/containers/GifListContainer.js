import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

  state = {
    threeGifs: []
  }

  handleSubmit = () => {
    console.log("The submit button has been clicked!")
  }



  componentDidMount() {
    // debugger
    // fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    //   .then(response => response.json())
    //   .then(data => {
    //     //console.log(data)
    //     this.setState({
    //       threeGifs: data
    //     })
    //   }
    // )
  }

  render() {
    return (
      <div>
        <GifList threeGifs={this.state.threeGifs} />
        <GifSearch handleSubmit={this.handleSubmit()} />
      </div>
    )
  }

}

export default GifListContainer;
