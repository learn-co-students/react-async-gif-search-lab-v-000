import React, { Component } from 'react' 

class GifList extends Component {
  constructor() {
		super()

		document.getElementById("container").innerHTML = ""	
	}

  render () {
    return (
      <div>
        <div id="container">
            {this.props.pics.map( pic => <img src={pic} alt="Your search result." />)}
        </div>
      </div>
    )
  }
}

export default GifList
