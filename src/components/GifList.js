import React from 'react'

// <GifList /> is a presentational component. It receives data from it's props and renders html given
// the input data. It can render a top level <ul> with each gif as an <li>.

class GifList extends React.Component {
  render() {
    console.log("giflist", this.props.gifs)
    return (
      <div>
        <p>Gifs:</p>
        <ul>
          {this.props.gifs.map(gif => {<li><img key={gif.url} src={gif.url} alt="gif" /> </li>})}
        </ul>
      </div>
    );
  }
}

export default GifList
