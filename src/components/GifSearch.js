
import React from 'react'
// The <GifSearch /> component will render a form that receives the user input for the giphy search.
// The text input should be a controlled component that stores the value of the input in it's component
// state and renders the DOM accordingly. The React component is always in charge of what the DOM looks
// like. <GifSearch /> should receive a callback prop from it's parent. On a submit event, it should
// invoke that callback prop with the value of the text input. It is this callback function, defined
// in <GifListContainer />, that will actually query the api with the text the user has entered.

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.onChangeHandler}
          />
          <button type="button">Search</button>
        </form>
      </div>
    );
  }
}



export default GifSearch
