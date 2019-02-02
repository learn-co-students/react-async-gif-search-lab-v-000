import React, { Component } from 'react'

class GifList extends Component {

  render() {
    const myNewArray = this.props.firstThreeGifs.map(function(element, index){
                        return <li className="list-group-item" key={`gif-${index}`}><img class="img-fluid" key={element.url} src={element.url} alt={`gif-${index}`}></img></li>;
                      })
    return(
      <div className="col-sm-6">
        <ul className="list-group">
          {myNewArray}
        </ul>
      </div>
    )
  }

}

export default GifList
