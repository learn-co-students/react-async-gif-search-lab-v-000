import React from 'react'

class GifSearch extends React.Component {


  constructor() {
    super()
    this.state = {
      search: ""
    }
  }




  handleChange = event => {
    event.persist()

    this.setState ({
      search: event.target.value
    })

  }



  render(){
    return(
      <form>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>

      </form>
    )
  }
}

export default GifSearch
