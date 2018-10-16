import React from 'react'

class GifList extends React.Component{
	displayImages = () => {
		this.props.images.map(img => 
			<li><img src={img}></img></li>
			);
		console.log(this.props.images);
	}

	render(){
		return(
			<ul>
			{this.displayImages}
			</ul>
			);
	}
}

export default GifList