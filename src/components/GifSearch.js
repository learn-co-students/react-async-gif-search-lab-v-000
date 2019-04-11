import React from 'react'

class GifSearch extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleOnSubmit}>
        <label>
          Search gifs:
          <input type="text" value={this.props.term} onChange={this.props.onChangeValue} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GifSearch