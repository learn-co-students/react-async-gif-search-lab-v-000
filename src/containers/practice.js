

state = {
  username: "",
  password: ""
}

//since the id values are the same as the keys in state, we can write an abstract setState here
handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
      <input type="text" id="password" value={this.state.password} onChange={this.handleChange}/>
    </form>
  )
}

////////////////


handleSubmit = event => {
  event.preventDefault()
  fetch('the server URL', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  })
}

state = {
  username: "",
  password: ""
}

state = {
  username: "",
  password: ""
}

//since the id values are the same as the keys in state, we can write an abstract setState here
handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

handleChange = event => {
  this.setState({
    [event.target.id]
  })
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
      <input type="text" id="password" value={this.state.password} onChange={this.handleChange}/>
    </form>
  )
}

render() [
  return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
      <input type="text" id="username" value={this.state.username} onChange={this.handleChange}>
    </form>
  )
]

// ....
handleClick = e => {
  fetch('https:api url')
    .then(response => response.json())
    .then(json => {
      this.setState({
        peopleInSpace: json.people
      })
    })
}

  render(){
    return(
      <button onClick={ this.handleClick }> click here to fetch </button>
      <div>  </div>
    )
  }



// ...

import React, { PureComponent } from 'react'


class App extends PureComponent {
  render() {
    return <div></div>
  }
}


export default App
