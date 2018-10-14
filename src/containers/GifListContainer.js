import React, {Component} from 'react'
// import '../components/GifSearch'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state ={
            images: []
        }
    }
    render(){
        return(
            <div>
                
                { this.renderImages() }
            </div>
        )
    }

    renderImages() {
        const { images } = this.state
      
        return images.map(img => <img src={ `${ img.images.original.url }` }/>)
    }

    handleThis = event =>{

    }
    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(data =>{
        
            this.setState({
                images: data.data
            })
        })
    }
}