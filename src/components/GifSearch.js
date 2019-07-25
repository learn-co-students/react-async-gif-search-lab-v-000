import React from 'react'

export default class GifSearch extends React.Component{
    state = {
        search: ""
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.search)

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search:</label>
                    <input id="search" type="text"value={this.state.query} onChange={event => this.setState({search: event.target.value})}/>
                    <input type="submit"/>
                </form>
            </div>
        )
   
    }
}