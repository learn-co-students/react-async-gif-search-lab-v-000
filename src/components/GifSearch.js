import React from 'react'

class GifSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.submitHandler(this.state.searchTerm)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Enter a Search Term:</h3>
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />

        <div className="field">
          <button className="ui secondary button" onClick={event => this.handleSubmit(event)}>Find Gifs</button>
        </div>
      </div>
    )
  }
}

export default GifSearch
