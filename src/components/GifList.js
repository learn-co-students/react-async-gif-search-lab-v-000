import React, { Component } from "react";

class GifList extends Component {
  constructor(props) {
    super(props);
    this.data = {
      data: this.props.gif
    }
  }
  
  render() {
    return (
      <React.Fragment>
      <ul>
      <li>{this.props.data}</li>
      </ul>
      </React.Fragment>
    )
  }
}
export default GifList;