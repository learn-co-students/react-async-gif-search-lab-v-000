import React from 'react';

const GifList = (props) => {
    return (
        <ul>
            {props.myGifs.map((gif, index) => <img key={index} src={gif.url} />)}
        </ul>
    )
}

export default GifList;