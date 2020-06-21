import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dn6GohQk8iiDFssr1Od6HqyLMftcbo8c')
        .then(response => response.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0, 3)
            })
        })
    }

    render() {
        return <GifList gifs={this.state.gifs} />
    }

}

export default GifListContainer