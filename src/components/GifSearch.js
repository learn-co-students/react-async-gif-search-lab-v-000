import React, { Component } from 'react';

class GifSearch extends Component {

  render(){
    return (
      <div className='gifSearch'>
           <form onSubmit={ (event) => this.props.searchMethod(event) }>
            <div class="form-group">
              <label for="serach">Search</label>
              <input type="text" class="form-control" id="search"></input>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
      </div>
    )
  }

}

export default GifSearch
