import React from 'react'
import GifList from '../components/giflist'
import GifSearch from '../components/gifsearch'

export default class GifListContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      data: ""
      query: ""
    }
  }

  handleQuery = event => {
    this.setState({
      query: event.target.value
    })
  }

  fetch('http://api.giphy.com/v1/gifs/search?q=' + this.state.query + '&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res = res.json())
    .then(json => this.setState({data: json}))

  render(){
    return (
      <div>
        <GifSearch onHandleQuery={this.handleQuery}/>
        <GifList data={this.state.data} />
      </div>
    )
  }


}
