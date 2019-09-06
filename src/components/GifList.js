import React from "react";

class GifList extends React.Component {
  render() {
    return (
      <div>
        {this.props.gifs.map(gif => (
          <img key={gif.url} src={gif.url} alt={gif.url} />
        ))}
      </div>
    );
  }
}

export default GifList;
