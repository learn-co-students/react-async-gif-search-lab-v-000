import React, { Component } from 'react' 

class GifList extends Component {
  constructor(props) {
		super(props);
		
		this.state = { pics: this.props.pics };
	}

  render () {
    return (
      <div>
        <div>
            {this.state.pics.map( pic => {<img src={pic} alt="Picture" />})}
        </div>
      </div>
    )
  }
}

export default GifList
