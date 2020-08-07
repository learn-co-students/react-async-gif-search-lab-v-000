import React from 'react'


class GifSearch extends React.Component {

    constructor() {
        super();
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        const style = {
            float: "right"
        }
        return (
            <div style={style}>
                <form onSubmit={this.props.mySubmitHandler}>
                <p>Enter a Search Term</p>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }




}

export default GifSearch