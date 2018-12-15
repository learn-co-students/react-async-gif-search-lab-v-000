import React from 'react';

class GifSearch extends React.Component {
    state = {
        term: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.term)
        
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a Search Term:</label>
                    <input type="text" value={this.state.term} onChange={event => this.setState({term: event.target.value})} />
                    <input type="submit" value="search" />
                </form>
            </div>
        )
    }
}

export default GifSearch;
