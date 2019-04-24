import React, { Component, Fragment } from 'react';

class GifList extends Component {
	render() {
		return (
			<Fragment>
				<ul>
					{this.props.imageURLs.map((el, idx) => {
						return (
							<li>
								<img src={el} key={idx} alt="hello" />
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}

export default GifList;
