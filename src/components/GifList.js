import React, { Component } from 'react';

class GifList extends Component {

  // componentDidMount(){
  //   this.generateList()
  // }

  generateList = () => {
    this.props.gifs.map((gif) => `<li> ${gif} </li>`)
     // const pans = pancakes.map((pancake, index) => <Pancake key={index} id={pancake} takeItOff={this.takeItOff} />);
  }

  render() {
    return (
      // receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.
      <div><ul>{this.generateList()}</ul></div>
    );
  }

}

export default GifList;
