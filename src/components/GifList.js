import React from 'react'
export default class GifList extends React.Component {

    
    generateLis= () => {
       return this.props.gifList.map((gif)=>(<li> <img src={gif.url} alt="gif" /> </li>)
        )
        
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