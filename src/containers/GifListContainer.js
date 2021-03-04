import React from 'react';
import GifList from '../components/GifList'
// import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: {
            url1: "",
            url2: "",
            url3: ""
        }
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=5ENOTtrwkXK41I9CKrMXg7KevSSh7vsa&rating=g')
            .then(res => res.json())
            .then(data => this.setState({ gifs: { ...this.state.gifs, url1: data.data[0].images.original.url,
            url2: data.data[1].images.original.url,
            url3: data.data[2].images.original.url
            }}))
    }

    render() {
        return(
            <div>
                < GifList gifs={this.state}/>
                {/* < GifSearch /> */}
            </div>
        )
    }
}