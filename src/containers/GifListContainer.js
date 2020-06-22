import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    search = ({  query }) => {
        const  url = `https://api.giphy.com/v1/gifs/search?q=` + query + `&api_key=dn6GohQk8iiDFssr1Od6HqyLMftcbo8c`
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0, 3)
            })
        })
    };

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch handleSearch={this.search} />
            </div>
        )
    }

}

export default GifListContainer