import React from 'react';

class GifSearch extends React.Component {
    state = {
        query: ''
      }


    render() {
        return (
            <form>
                <input onChange={this.state.query} type="text"/>
                <input onSubmit={this.props.onSubmit(this.state.query)} type="submit"/>
            </form>
        );
    }
}

export default GifSearch;