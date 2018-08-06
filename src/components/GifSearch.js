import React, {Component} from 'react';

export default class GifSearch from Component{
  constructor(){
    super();

    this.state={
      query:''
    }
  }

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.formSubmit}>
          <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
          <input type="submit">
        </form>
      </div>
    )
  }
}
