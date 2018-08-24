import React from 'react'

const GiftSearch = ( props ) => {

  state = {search: ''}

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit()} >
        <input type='text' value={this.state.search} onChange={this.setState({search: event.target.value})} >
      </form>
    </div>
  )
}

export default GiftSearch
