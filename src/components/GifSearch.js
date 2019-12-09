import React from 'react';

class GifSearch extends React.Component {

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e)}>
        <input type="text" placeholder="Search" name="searchItem" onChange={e => this.props.handleChange(e)} />
        <input type="submit" />
      </form>
    )

  }
}

export default GifSearch;