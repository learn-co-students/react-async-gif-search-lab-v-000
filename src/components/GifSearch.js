// The <GifSearch /> component will render a form that receives the user input for the giphy search. The text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.
//
// <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the api with the text the user has entered.

import React from 'react'

class GifSearch extends React.Component {
  // this.props.fetchGIFS

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  handleOnChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Term: </label>
          <input
            placeholder="Enter word/term..."
            type="text"
            name="searchQuery"
            value={this.state.query}
            onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }

}

export default GifSearch
