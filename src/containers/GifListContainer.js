import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'




class GifListContainer extends React.Component {

  state = {
    term: '',
    results: []
  }

  handleChange = (e) => {
    this.setState({term: e.target.value})
  }

  formSubmit = (e) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => this.setState({
        results: json.data.slice(0, 3)
        })
      )
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <GifSearch onChangeValue={this.handleChange} term={this.state.term} handleOnSubmit={this.formSubmit}/>
      <GifList gifs={this.state.results} />
      </div>
    )
  }

}

export default GifListContainer