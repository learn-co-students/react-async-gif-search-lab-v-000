import React from 'react';
import GifSearch from "../components/GifSearch";
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    state = {
        query: 'YOUR QUERY HERE',
        gifs: []
      }
    

    componentDidMount() {
      this.fetchQuery()
    }

    fetchQuery(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(results => results.json())
        .then(gifs => {
            let first3Gifs = gifs.data.slice(0,3);
            this.setState({gifs: first3Gifs})
        })
    }
    onGifSearch(query) {
        this.setState({query})
        this.fetchQuery()
    }        
        
    
    render() {
        return (
            <div>
                < GifSearch gifSearch={this.onGifSearch.bind(this)}/>
                < GifList gifResults={this.state.gifs}/>
            </div>
            
        )
    }
}

export default GifListContainer;