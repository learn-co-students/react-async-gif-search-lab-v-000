import React from 'react'

class GifSearch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        query: ""
      }
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchGif(this.state.query)
    }

    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" name={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
            <input type="submit" value="Submit" />
          </form>
      )
    }
}

export default GifSearch
