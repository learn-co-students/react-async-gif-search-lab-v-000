import React from "react";

class GifList extends React.Component {
  render() {
    console.log(this.props.gifs);
    return (
      <div>
        <p>Insert for Gifs</p>
        <ul>
          {this.props.gifs.map(gif => {
            <li>
              <img key={gif.url} src={gif.url} alt="gif" />
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default GifList;
