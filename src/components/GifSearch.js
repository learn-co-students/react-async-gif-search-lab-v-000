import React, { Component } from 'react'


const GifSearch = ({setNewGifs}) => {

    return (

      <form onSubmit={(e) => {
      	e.preventDefault()
      	console.log(e)
      	const searchTerm = e.target.querySelector('#userInput').value
      	setNewGifs(searchTerm)
      }}>

        <input type="text" id="userInput" />
        <input type="submit" ></input>
      </form>
    )
}


export default GifSearch