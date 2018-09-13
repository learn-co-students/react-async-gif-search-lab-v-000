import React from 'react';
import GifSearch from "../components/GifSearch";
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    state = {
         gifs: []
      }
    

    componentDidMount() {
      this.fetchQuery()
    }

    fetchQuery(search){
        let query;
        search === undefined ? query = 'YOUR QUERY HERE' : query = search 
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(results => results.json())
        .then(gifs => {
            let first3Gifs = gifs.data.slice(0,3);
            this.setState({gifs: first3Gifs})
        })
    
    }
     
        
    
    render() {
        return (
            <div>
                < GifSearch gifSearch={this.fetchQuery.bind(this)}/>
                < GifList gifResults={this.state.gifs}/>
            </div>
            
        )
    }
}

export default GifListContainer;