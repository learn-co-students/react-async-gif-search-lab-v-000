import React, {component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      gifs: []
    }
  }

  fetchGIFs=(search)=>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
      // this.setState({
      //     gifs: [data.images.original.url].slice(0,3)
      //   })
      })
  }

  componentDidMount(){
    this.fetchGIFs()
  }
  render(){
    return(
      <div id='container'>
        <GifSearch what={'what'} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}
export default GifListContainer
