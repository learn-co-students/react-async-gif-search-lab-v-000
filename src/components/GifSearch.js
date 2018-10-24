import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return(
      <div className="gif-search">
        <h5>Enter a Search Term:</h5>
        <form onSubmit={ event => this.props.submit(event) }>
          <input type="text" id="query" value={this.state.query} onChange={event => this.handleChange(event)} />
        </form>
      </div>
    )
  }
}

export default GifSearch
