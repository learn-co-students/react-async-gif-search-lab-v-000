import React, { Component } from 'react';

class GifSearch extends Component {
state = {
    query: ""
}

handleSubmit= e => {
    e.preventDefault()
    this.props.fetchGIFs(this.state.query)
}

render(){
    return(
      <form onSubmit={this.handleSubmit}>
              <div>
               <label>Enter a search word </label>
             </div>
             <div>
              <input type="text" value={this.state.query} onChange={ e => this.setState({query: e.target.value})}/>
             </div>  
             <button type="submit">Search</button>          
       </form>   
    )
}

}

export default GifSearch