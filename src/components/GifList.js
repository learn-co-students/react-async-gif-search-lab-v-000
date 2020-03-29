import React, { Component } from "react";

export default class extends Component {
  state = {
    images: []
  };
  constructor(props) {
    super();
    const { images } = props;
    this.setState({ images });
  }

  render() {
    const { images } = this.props;
    return (
      <ul>
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.images.original.url} alt={img.title} />
          </li>
        ))}
      </ul>
    );
  }
}
