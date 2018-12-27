import React from 'react'
export default class GifList extends React.Component {

    
    generateLis= () => {
        this.props.gifList.map((gif)=>(<li> <img src={gif.url} alt="gif" /> </li>)
        ).join("")
        debugger
    }


    render() {
    return (
        <div>
            <ul>
                {this.generateLis()}
            </ul>
        </div>
    )
    }
}