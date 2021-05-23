import React from 'react';

class GifSearch extends React.Component {

    state = {
        query: ""
    }

    handleSumbit = event => {
        event.preventDefault();
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
                </form>
            </div>
        )
    }

}

export default GifSearch;