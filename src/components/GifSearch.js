import React from 'react';

class GifSearch extends React.Component {

  onClickButton = event => {
    event.preventDefault();
    this.props.submit()
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onClickButton}>
          <input name="search" type="text" onChange={event => this.props.change(event)} value={this.props.search} />
          <button type="submit">Search</button>
        </form>
      </div>
    );

  }

}

 export default GifSearch;
