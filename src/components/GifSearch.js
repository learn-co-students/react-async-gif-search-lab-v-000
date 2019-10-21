import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
      super ();

      this.state = {
        query: ''
      };
    }


    handleSubmit = event => {
      event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render(){
      return (
         <form onSubmit={this.handleSubmit}>
         <div>
         <label>
         Search
         <input onChange={event => this.setState({query: event.target.value})}
         value={this.state.query}
         />

         </label>
         </div>
         <div>
         <button type="submit">Search </button>
         </div>
         </form>

      );
    }
}


export default GifSearch;
