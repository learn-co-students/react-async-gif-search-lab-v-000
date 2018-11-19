import React, { Component } from 'react'


const GifSearch = ({setNewGifs}) => {

    return (

      <form onSubmit={(e) => {
      	e.preventDefault()
      	const searchTerm = e.target.querySelector('#userInput').value
      	console.log(searchTerm)
      	setNewGifs(searchTerm)
      }}>

        <input type="text" id="userInput" />
        <input type="submit" ></input>
      </form>
    )
}


export default GifSearch