import React from 'react';

import GifSearch from './GifSearch.js';

function NavBar(props) {
	const colors = {
		black: 'navbar-inverse',
		white: 'navbar-default'
	};

	return (
		<nav className={`navbar ${colors[props.color]}`}>
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand">
						{props.title}
						{/* <GifSearch /> */}
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
