
import React from 'react'
import GifListContainer from '../containers/GifListContainer'



class GifSearch extends React.Component {

  state = {
    searchTerm: ''
  }


  handleChange = event => {
    console.log("event object value from handeChange:", event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }



  render(){
    return(
      <div> hi
        <form onSubmit={ event => this.props.handleSubmit(event)} >
          <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={ event => this.handleChange(event) } />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default GifSearch
