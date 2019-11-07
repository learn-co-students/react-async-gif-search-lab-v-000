import React from "react";

const GifList = props => {
  console.log(props);
  return (
    <ul>
      <li>
        {props.gifs.map(gif => (
          <img key={gif.id} src={gif.url} />
        ))}
      </li>
    </ul>
  );
};

export default GifList;
