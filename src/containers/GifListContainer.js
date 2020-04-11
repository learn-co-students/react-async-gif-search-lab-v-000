import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gifURLs: []
        }

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }
    

    componentDidMount() {
        this.handleSearchSubmit()
    }
    



    handleSearchSubmit(request = "dolphins") {   
        const baseURL = `https://api.giphy.com/v1/gifs`
        const query = '/search?q='
        const qParam = request
        const limit = '&limit=3'
        const API_KEY = '&api_key=NWlq1IXIEWq50TEsc41jo7cSqmsWnkMd'
        const URL = `${baseURL}${query}${qParam}${limit}${API_KEY}`

        fetch(URL)
            .then((response) => {
                return response.json()
            })
            .then((largeObj) => {
                let mappedURLs = largeObj.data.map(obj => {
                    return obj.images.original.url
                })
                this.setState({gifURLs: mappedURLs})
            })
            
    }

    render() {
        return (
            <div className='gifs'>
                <GifList gifURLs={this.state.gifURLs}/>
                <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
            </div>
        );
    }
}

export default GiftListContainer;