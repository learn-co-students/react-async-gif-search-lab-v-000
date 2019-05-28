import React from 'react';
const GifList = (props) => {
	return <div>{props.gifs.map((g) => <img src={g.url} alt="" key={g.url} />)}</div>;
};

export default GifList;
