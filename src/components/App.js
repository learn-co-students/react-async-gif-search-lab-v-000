// import React from 'react'
import React, { Component } from 'react';
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component

export default class App extends Component {

      render(){
      return (
        <div className='App'>
            <NavBar color='black' title="Giphy Search" />
            <GifListContainer />
        </div>
      )
  }
}
