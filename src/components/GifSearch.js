import React from 'react'

class GifSearch extends React.Component {

  state = {
    term: "temporary term"
  }

  handleChange = event => {
    console.log('something was changed')
    event.preventDefault()
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.persist()
    const temp = event.target.elements[0].value
    console.log(`${temp} was submitted`)
    return this.props.onFormSubmit(temp)
  }

  render() {
  return (
    <div id="GifSearch">
    Test GifSearch
    <form onSubmit={this.handleSubmit}>
     <input type="text" id="term" value={this.state.term} onChange={this.handleChange}/>
   </form>
    </div>
  );
}
}

export default GifSearch
