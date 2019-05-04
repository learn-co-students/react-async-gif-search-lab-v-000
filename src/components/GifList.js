import React from 'react';


    class GifList extends React.Component {
      render() {
        const gifPics = this.props.gifs.map(gif => (
          <img key={gif.url} src={gif.url} alt="gif"/>
      ))
      return (
        <ul>
                <li>
                  {gifPics}
                </li>
        </ul>
      )
    }
  }




export default GifList
