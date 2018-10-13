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

    componentDidMount() {
        this.doSearch();
    }

    doSearch() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&limit=3&&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(jsonData => {
       
                this.setState({
                gifs: jsonData.data
                })
            })
            .catch((error) => console.error("Fetch Failed",error));

    }

    handleSubmit = (params) => {
        this.setState({
            search: params.search
        },() => {
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