import React, {Component} from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

export default class GifListContainer extends Component{
    state = {
        gifs: []
        };
    
    
    onSubmitHandler = (searchTag) =>{

        let url = `http://api.giphy.com/v1/gifs/search?q=${searchTag}&api_key=dc6zaTOxFJmzC&rating=g`
            
        fetch(url)
        .then(response =>response.json())
        .then(json => {
            this.setState(
                {gifs: json["data"].slice(0,3)}
            )}
        )
    }

 
    render (){
        return(
            <div>
                <GifSearch onSubmitHandler={this.onSubmitHandler} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}