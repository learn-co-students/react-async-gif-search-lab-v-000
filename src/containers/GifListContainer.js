import React from 'react';
import GifSearch from "../components/GifSearch";
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    state = {
        query: 'YOUR QUERY HERE',
        gifs: []
      }


    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(results => results.json())
        .then(gifs => {
            let first3Gifs = gifs.data.slice(0,3);
            console.log(first3Gifs,  this.state)
            this.setState({gifs: first3Gifs})
        })

    }
    onGifSearch(query) {
        this.setState({query})
    }        
        
    
    render() {
        return (
            <div>
                < GifSearch onSubmit={this.onGifSearch.bind(this)}/>
                < GifList />
            </div>
            
        )
    }
}

export default GifListContainer;