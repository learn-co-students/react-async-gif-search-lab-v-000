import React from 'react'

import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
          gifs: [],
          search: 'trending'
        };
    }
    state = { gifs: [] };
  //  http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

    componentDidMount() {
        this.doSearch();
    }

    doSearch() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&limit=3&&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(jsonData => {
                console.log("do search",jsonData.data);
                this.setState({
                gifs: jsonData.data
                })
            })
            .catch((error) => console.error("Fetch Failed",error));
    }

    handleSubmit = (params) => {
        console.log("ListContainer Submit",params);
        this.setState({
            search: params.search
        },() => {
            console.log("New Search field",this.state);
            this.doSearch();
        });
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
  }