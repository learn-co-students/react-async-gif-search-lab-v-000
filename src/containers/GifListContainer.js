import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  render() {
    return (
      <div>
        this is from the GifListContainer
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
        {/* {this.state.gifs.slice(0, 3)} */}
      </div>
    );
  }

  fetchGifs(query = "dolphins") {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=FlZAyvQFoaCrOWX4AN0C8daNu4hiUP45&limit=3`
    )
      .then(response => response.json())
      .then(({ data }) => { this.setState({ gifs: data.map(g => ({ url: g.images.original.url })) }) })

    // .then(r => console.log(r['data']));

    // 
  }
  componentDidMount() {
    this.fetchGifs();
  }
}

// fetch('')
// 	.then((response) => response.json())
// 	.then((data) => this.setState({ gifs: data.map((g) => g.images.original.url) }))
// 	.catch((err) => console.warn(err));

export default GifListContainer;
