import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super();
    
        this.state = {
          query: ""
        };
      }

      handleQuery = event => {
        this.setState({
          query: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        this.props.search(this.state.query)
      }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <input id="search" name="search" type="text" onChange={this.handleQuery} value={this.state.query} />
              </label>
            </div>
            <div>
              <button type="submit">Search</button>
            </div>
          </form>
        )
    }
}

export default GifSearch