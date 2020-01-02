import React from 'react';



export default class GifSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }

    handleChange = (event) => {
       this.setState({
           input: event.target.value,
       })
    }

    getSearchValue = () => {
        return this.state.input
    }

    render(){
        return(
            <form onSubmit={this.props.returnSubmitValue} >
                 <label>Search for image: </label>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }

}