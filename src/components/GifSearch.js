import React, { Component } from 'react';

class GifSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { query: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchGifs(this.state.query);
    }

    handleChange(event) {
        this.setState({ query: event.target.value })
    }

    render() {
        return (

            <form  onSubmit={this.handleSubmit}>
                <h3>Enter a Search Term</h3>
                <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
                <input type="submit" value="Find Gifs"/>
            </form>

        )
    }

}

export default GifSearch

//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }




