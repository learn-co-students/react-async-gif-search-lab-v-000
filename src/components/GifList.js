import React from 'react';

export default class GifList extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.list.map(gif => <li></li>)}
        </ul>
      </div>
    )
  }

}
