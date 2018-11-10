import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import { Container, Row, Col } from 'reactstrap';

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchData = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data.map(gif => gif.images.original.url)
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <GifSearch search={this.fetchData} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
