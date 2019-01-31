import React from 'react';

export default class GifList extends React.Component {


	render() {
		return (
			<ul>
				{this.props.gifs.map((gif, index) => 
					<li key={index}><img src={gif} /></li>)
				}
			</ul>
		)
	}
}