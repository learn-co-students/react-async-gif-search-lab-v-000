import React from 'react';

const GifSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <label>Enter a Search Term:</label>
        <input type="text" name="search"></input>
        <input type="submit" value="Find Gifs" />
      </form>
    </div>
  )
}

export default GifSearch
