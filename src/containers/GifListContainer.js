import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {gifs: []}

    componentDidMount() {
       //fetch request
    }

    handleSubmit = search_term => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search_term}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        })
        console.log(this.state.gifs);
    }

    render () {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}