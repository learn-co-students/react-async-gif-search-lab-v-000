
import React from 'react'
import GifListContainer from '../containers/GifListContainer'



class GifSearch extends React.Component {

  state = {
    query: ''
  }


  handleChange = event => {
    console.log("event object value from handleChange:", event.target.value)
    this.setState({
      query: event.target.value
    })
  }


    handleSubmit = event => {
      event.preventDefault()
      // console.log("event target value in GifListCon hS:", event.target)
      // fetch(`https://api.giphy.com/v1/gifs/search?q=` + `${event.target.value}` + `&api_key=XV0KMGghwZpJg9ceQYCSg61l209OnFCi&rating=g`)
      //   .then(res => res.json())
      //   .then(data => {
      //
      //   })
      this.props.fetchGifs(this.state.query) 
    }



  render(){
    return(
      <div> hi
        <form onSubmit={this.handleSubmit} >
          <input type="text" id="query" value={this.state.query} onChange={ event => this.handleChange(event) } />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default GifSearch


// you don't have to put parantheses bc it's a just a reference to the function
// <form onSubmit={ event => this.handleSubmit()} >
