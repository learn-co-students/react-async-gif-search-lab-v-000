import React, {Component} from 'react'

class GifSearch extends Component {
   state = {
    query: ""
   }

   handleSubmit = event => {
        event.preventDefault()
      this.props.fetchGifs(this.state.query)
     
     }

    render(){
        return(
                     
        <form onSubmit={this.handleSubmit}>
         <label>
          query:
          <input type="text" value={this.state.value} onChange={event => this.setState({query: event.target.value})} />
         </label>
          <input type="submit" value="Submit" />
        </form>
        )
    } 
}
export default GifSearch