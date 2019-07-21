import React from 'react'

class GifSearch extends React.Component {

    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('event prevented')
        this.props.fetchGIFs(this.state.userInput)
    }

    handleChange =  e => {
        this.setState({
            userInput: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Enter a Search Term: <br></br>
                        <input type="text" value={this.state.userInput} onChange={this.handleChange} />
                    </label><br></br>
                    <input type="submit" value="Find Gifs"></input>                
                </form>

            </div>
        )
    }
}

export default GifSearch