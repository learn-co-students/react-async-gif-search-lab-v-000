import React from 'react';

export default class GifList extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.list.map(gif => <li><img src={gif.url} className="img-responsive"/> </li>)}
        </ul>
      </div>
    )
  }

}
