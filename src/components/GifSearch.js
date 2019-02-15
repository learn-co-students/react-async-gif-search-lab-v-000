// search form

// <GifSearch /> should receive a callback prop from it's parent.
// On a submit event, it should invoke that callback prop with the value of the
// text input. It is this callback function, defined in <GifListContainer />,
// that will actually query the api with the text the user has entered.

import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.updateSearchWord(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a Search Term:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}

export default GifSearch
