class GifListContainer extends React.Component {
  state = { data: [] };
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
    return <Gifsearch comments={this.state.data} />;
  }
}
