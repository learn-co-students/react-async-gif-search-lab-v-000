import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };
  }

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Enter a Search Term
            <input id="input" name="input" type="text" value={this.state.query}
            onChange={this.handleInputChange} />
          </label>
        </div>
      
        <div>
          <button type="submit" >Find Gifs</button>
        </div>
      </form>
    );
  }
}

export default GifSearch;