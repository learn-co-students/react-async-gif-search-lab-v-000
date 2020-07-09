import React from 'react'



class GifSearch extends React.Component {

    state = {
        query: ""
    }

    
    handleSubmit = event =>{
        event.preventDefault()
        this.props.fetchingGiphy(this.state.query)

    }
        
    
//render a form that receives the user input for the giphy search. 
//he text input should be a controlled component that stores the value of the input in its component state 
//should receive a callback prop from its parent. (to fetchAPI)
    render(){
        return (
            <div>
                hello from gifSearch
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                 
                    <input type="submit" value="Submit" /> 

                </form>

            </div>
        )

    }


}

export default GifSearch