import React, { Component } from 'react';


class GifSearch extends Component {
  state={
      text: ""
    }
    handleTextChange = event => {
          this.setState({
            text: event.target.value
          })
        }

  handleSubmit = event => {
    event.preventDefault()
      if (this.state.username !== "" && this.state.password !== "")this.props.callBack(this.state.text)
      }


  render() {
    return (
    <div className="Search">
    <form onSubmit = {event => this.handleSubmit(event)}>
          <div>
            <label>
              Gif Search
              <input id="search" name="search" type="text" onChange={ event => this.handleTextChange(event)} value={this.state.text}/>
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

    </div>
  )}

}
export default GifSearch;
