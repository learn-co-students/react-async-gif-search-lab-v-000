import React, { Component } from 'react';

class GifSearch extends React.Component {
  state = {
    input: ""
  }

  render() {
    return (
      <form>
        <p>Enter a Search Term</p>
        <input type="text" id="gif_search_input"></input>
        <button>Find Gifs</button>
      </form>
    )
  }
}

export default GifSearch