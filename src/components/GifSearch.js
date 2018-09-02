import React from 'react'

function GifSearch(props){

  return (
    <div>
      <form>
        <input type="text" id="inquiry" onChange={props.handleChange}/>
        <button onClick={props.handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default GifSearch
