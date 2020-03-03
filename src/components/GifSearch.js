import React from 'react';


export default class GifSearch extends React.Component {

    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    changeList = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type='text' value={this.state.query} onChange={this.changeList}></input>
                </form>
            </div>

        )

    }

    


    
}