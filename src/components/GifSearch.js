import React from 'react'

class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = event => {
   event.preventDefault()
   //Form submit defaults to a post request
   this.props.fetchGIFs(this.state.search)
   //Only available when the parent component is mounted b/c of the componentDidMount
   //Promises are asynch, so this is to help with these asynch function calls. Rerending when Promises havent returned data yet are a problem
 }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
      <label>Search: <input onChange={this.handleChange.bind(this)} type="text" id="search" value={this.state.search}/></label>
      <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default GifSearch
