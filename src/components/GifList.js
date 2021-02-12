import React, { Component } from "react";

class GifList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((giph) => (
            <li key={giph.id}>
              <img src={giph.images.original.url} alt={giph.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GifList;
