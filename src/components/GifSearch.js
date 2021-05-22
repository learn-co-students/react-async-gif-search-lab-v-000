import React from 'react'

class GifSearch extends React.Component{
    handlePreventDefault=(event)=>{
        event.preventDefault();
        this.props.handleOnSubmit(event);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlePreventDefault}>
                    <label >Enter a Search Term:</label>
                    <input type="text" name="q" value={this.props.q} onChange={this.props.handleOnChange} />
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }

}

export default GifSearch;