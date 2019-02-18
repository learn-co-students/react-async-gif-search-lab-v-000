 //renders the form
 import React from 'react'


 class GifSearch extends React.Component{

   state = {
        textInput: ""
      };

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.textInput)
 }


 //The <GifSearch /> component will render a form that receives the user input for the giphy search.
 //The text input should be a controlled component that stores the value of the input in it's component
 //state and renders the DOM accordingly. The React component is always in charge of what the
 //DOM looks like.
//<GifSearch /> should receive a callback prop from it's parent.
//On a submit event, it should invoke that callback prop with the value of the text input.
//It is this callback function, defined in <GifListContainer />, that will actually query the
//api with the text the user has entered.

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.textInput} onChange={event => this.setState({textInput: event.target.value})} />
        </form>
      </div>
    )
  }

}

export default GifSearch
