import React from 'react'

export default class GifList extends React.Component {

	render() {
		if(this.props.gifs.length > 0) {
		return (
		<div>
		 <ul>
		  <li><img src={this.props.gifs[0].images.downsized.url} alt="image1"/></li>
		  <li><img src={this.props.gifs[1].images.downsized.url} alt="image2"/></li>
		  <li><img src={this.props.gifs[2].images.downsized.url} alt="image3"/></li>
		 </ul>
		</div>
		)}
		else {
			return (<h1>Nothing Here</h1>)
		}
	}
}