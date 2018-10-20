import React, {Component} from 'react';

export default class GifSearch extends Component {
    constructor(props){
        super(props);
        this.state = {searchTag: ''}
    }

      onSubmitHandler= (event) => {
        // event.persist();
        event.preventDefault();
        this.props.onSubmitHandler(this.state.searchTag);
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type = "text" onChange={event=>this.setState({searchTag: event.target.value})} value={this.state.searchTag}/>
            </form>
        )
    }
}