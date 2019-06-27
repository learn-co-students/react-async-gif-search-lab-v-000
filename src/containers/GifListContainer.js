import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

    componentDidMount() {
      this.handleFetch()
    }

    handleFetch = (query) => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
       .then(res => res.json())
       .then(({data}) => {
         this.setState({
            gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
       })
     }


    render() {
      return <GifList gifs={this.state.gifs} />;
            <GifSearch handleFetch={this.handleFetch.bind(this)}  />
    }
}

export default GifListContainer;
