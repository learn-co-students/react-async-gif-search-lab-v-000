import React,  { Component } from 'react'

 
 const GifList = props => {
 return (
  <div>
    {props.gifs.map(gif =>  <img key={gif.url} src={gif.url} alt="gif" />)}
 </div>
 )
}

export default GifList


  // <ul>
  //         <li key={id}> {gifs.data[0]} </li>
  //         <li key={id}> {gifs.data[1]} </li>
  //         <li key={id}> {gifs.data[2]} </li>
  //       }