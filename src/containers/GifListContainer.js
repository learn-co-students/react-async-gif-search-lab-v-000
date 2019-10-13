import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = { data: [] };
  handleSubmit = this.handleSubmit

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  render() {
    return (
      <React.Fragment>
      <GifList data={this.state.data.map((object, index) => (<li key={index}>{object}></li>))}
        />
      
      <GifSearch submitHandler={this.handleSubmit} />
      </React.Fragment>
    )
  }
}

export default GifListContainer;