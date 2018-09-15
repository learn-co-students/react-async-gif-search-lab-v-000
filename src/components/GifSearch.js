import React from 'react'

const GifSearch = ({ updateResultsFn }) => {
    return (
      <form onSubmit={(domEvent) => {
        domEvent.preventDefault();
        const newSearchTerm = domEvent.target.querySelector('#userInput').value;
        updateResultsFn(newSearchTerm);
      }}>

      <p>Enter a Search Term:</p>
        <input
          type="text"
          id="userInput"
        />
        <input type="submit" value="Find Gifs"></input>
      </form>
    );
};

export default GifSearch;
