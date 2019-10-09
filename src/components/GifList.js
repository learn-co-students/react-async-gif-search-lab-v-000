import React from 'react';

class GifList extends React.Component {
  handleConsole = () => {
    console.log("inside the render() GifList")

  }

  seeConsoleLog = () => {
    console.log(this.props.threeGifs)
  }


  render() {
    return (
      <div>
        <ul>{this.seeConsoleLog()}</ul>
      </div>
    )
  }
}

export default GifList;
