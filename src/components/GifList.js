import React from "react";

const GifList = ({gifs}) => {
  return gifs.length === 0 ? (<h3>No gifs yet</h3>) : 
  (<ul>
      {gifs.map(gif => {
        return (
          <li>
            <img src={gif.images.downsized.url} />
          </li>
        );
      })}
    </ul>);
};

export default GifList;
