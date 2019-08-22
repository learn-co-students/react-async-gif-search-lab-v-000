import React, { Component } from 'react'

state = {
	gifURLS: []
}


const fetchGifs = () => {
	fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
	.then( res => res.json())
	.then( data => dataValues={})
}


//do i absolutely NEED to use componentDidMount? What are its advantages? Just optimization?