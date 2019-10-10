import React from 'react';

class GifList extends React.Component {
  handleConsole = () => {
    console.log("inside the render() GifList")

  }

  gifGenerator = (gifs) => {
    // console.log(gifs)
    return gifs.map( gif =>
      <ul>
        <li><img src={gif.url} alt={gif.title} ></img>  </li>
      </ul>)
  }


  render() {
    return (
      <div>
        <ul>{this.gifGenerator(this.props.gifs)}</ul>
      </div>
    )
  }
}

export default GifList;
