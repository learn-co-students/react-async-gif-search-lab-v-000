import React, {Component} from 'react'
// import '../components/GifSearch'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

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
                <GifSearch fetchImages={this.fetchImages} />
                <GifList images={this.state.images} />
            </div>
        )
    }

    renderImages() {
        const { images } = this.state
        
        return images.map(img => <img src={ `${ img.images.original.url }` }/>)
    }

    fetchImages = (search = "cats") =>{        
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data =>{
            this.setState({
                images: data.data
            })
        })
    }
    componentDidMount(){
        this.fetchImages()
    }
}