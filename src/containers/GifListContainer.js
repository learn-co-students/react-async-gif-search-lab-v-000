import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    state={
        gifs:[],
        q:""
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=(event)=>{
        console.log(this.state.q);
        let request =`https://api.giphy.com/v1/gifs/search?q=${this.state.q}&api_key=ovTGqxe1Mf6pqACXpbnHQtcPPJqqjkHy&rating=g`;
        console.log(request);
        
        fetch(request)
        .then(resp=>resp.json())
        .then(json=>this.setState(
            {gifs: json.data.slice(0,3)}))

    }

    render(){
        return(
            <div>
                <GifSearch  
                q={this.state.q} 
                handleOnChange={this.handleChange} 
                handleOnSubmit={this.handleSubmit}
                />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;
