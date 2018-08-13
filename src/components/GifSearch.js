import React from 'react'
 export default class GifSearch extends React.Component{
    constructor(){
        super()
        this.state={
            value:""
        }
    }

    onChange=(event)=>{
        const val = event.target.value
        this.setState({
            value: val,
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Search Terms: <input type="text" name="query"></input>
                <input type="submit"></input>
            </form>
            )
    }

} 
