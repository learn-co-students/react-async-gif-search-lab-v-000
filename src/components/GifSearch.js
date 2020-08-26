
import React from 'react'
import GifListContainer from '../containers/GifListContainer'



class GifSearch {

  state = {
    searchTerm: ''
  }


  handleChange = event => {
    console.log(event)
  }



  render(){
    return(
      <div> hi
        <form>
          <input type="text" value={this.state.value} onChange={ event => this.handleChange(event) } />
          <input type="submit" onSubmit={this.onSubmit} />
        </form>
      </div>
    )
  }

}

export default GifSearch
