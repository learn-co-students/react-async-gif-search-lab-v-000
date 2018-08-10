import React, { Component } from 'react'

export default class GifList extends React.Component{
    render(){
        <ul>
        {this.props.gifs.map(gif=>{
            return <li><img src="{gif.url}"/></li>
        })}
        </ul>
    }
    
}