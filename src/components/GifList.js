import React, { Component } from "react";

class GifList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul>
        {this.props.data.map((u)=> (<li><img src={u.url}/></li>))}
      </ul>
    )
  }
}
export default GifList;