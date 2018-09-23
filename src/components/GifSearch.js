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
                this.props.handleSubmitQuery(this.state.value)}} >
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}