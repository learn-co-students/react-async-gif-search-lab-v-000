// render a form that receives the user input for the giphy search. The text input should be a controlled component that stores the value of the input in it's component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.

//should receive a callback prop from it's parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the api with the text the user has entered.

import React, { Component } from 'react';
class GifSearch extends Component {

  constructor() {
    super();

    this.state = {
      search: ''
    };
  }

  handleInputChange = event => {
   this.setState({

     [event.target.name]: event.target.value
   })
 }// end handleInputChange

 handleSubmit = (event) => {
   event.preventDefault()
   this.props.handleSubmit(this.state.search)
 }


  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter a Search Term
              <input
                id="search"
                name="search"
                type="text"
                value={this.state.search}
                onChange={this.handleInputChange}
                />
            </label>
          </div>
          <div>
            <button type="submit" >Find Gif</button>
          </div>
        </form>
      </div>

    )
  }

}

export default GifSearch;
