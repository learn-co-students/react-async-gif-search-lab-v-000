import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
  super();

  this.state = {
    search: ''
  };
}

handleSubmit = event => {
  event.preventDefault()

  this.props.fetchGIFs(this.state.search)
}


  render() {
    return (
        <form onSubmit={ event => this.handleSubmit(event) }>
          <div>
            <label>
              Search
              <input id="search" name="search" type="text" onChange={event => this.setState({search: event.target.value})} value ={this.state.search}/>
            </label>
          </div>
        </form>
    )
  }

}

export default GifSearch
