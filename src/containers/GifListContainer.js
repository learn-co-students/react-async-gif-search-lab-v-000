import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            searchURL: undefined
        }
    }

    handleSearch(values) {
        let first3 = [];
        for (let i = 0; i < 3; i++) {
            first3.push(values[i])
        }
       this.setState({images: first3})
    }

    componentDidUpdate() {
        fetch(`${this.state.searchURL}`)
            .then(response => response.json())
            .then(json => this.handleSearch(json.data))
      }

    returnSubmitValue = (event) => {
        event.persist();
        event.preventDefault();
        let input = event.target.children[1].value.split(' ').join('').toString();
        this.setState((previousState) => {
            return{
                ...previousState,
                searchURL : 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC&rating=g'
           }
        });
    }

    
    render(){
            return(
                <div>
                    <div><GifSearch returnSubmitValue={this.returnSubmitValue}/></div>
                    <div><GifList images={this.state.images}/></div>
                </div>
            )
    }
}