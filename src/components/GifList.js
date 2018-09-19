import React, { Component } from 'react'

class GifList extends Component {

	render(){
		return(
			<ul>
			{this.props.urls.map(url => <li key={url}><img src={url} /></li>)} 
			</ul>
		)
	}
}

export default GifList