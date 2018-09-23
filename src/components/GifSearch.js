//renders a form that receives the user input for the giphy search. Text input
//should be controlled component that stores the value on the input- renders the
//DOM accordingly
import React from 'react'
export default class GifSearch extends React.Component{
    constructor(){
       super()
       this.state = {
           value: ''
       }
   }
     handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
     render(){
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.fetchGifs(this.state.value)}} >
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}
