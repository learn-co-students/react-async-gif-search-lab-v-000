import React from 'react'
import NavBar from './NavBar'
import GiftListContainer from '../containers/GifListContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GiftListContainer/>
      </div>
    )
  }
}
export default App
