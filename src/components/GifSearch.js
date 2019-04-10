import React from 'react'

class GifSearch extends React.Component {
  render(){
    return(
      <div>
        <input type="text" value={this.props.search} onChange={this.props.onChangeType}>

        </input>
        <button onClick={this.props.onFindGifClick}>Submit</button>
      </div>
    )
  }
}
export default GifSearch
