import React, {Component} from 'react'

export default class GifSearch extends Component {

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
          <br />
          <input className="btn btn-success" type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}
