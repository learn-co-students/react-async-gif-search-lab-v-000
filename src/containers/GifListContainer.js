import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GiftListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            gifs: [],
        }
    }

    fetchGIFs = (userInput) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(req => {
                this.setState({
                    gifs: req.data.slice(0, 3)
                })
        })
    }
    componentDidMount(){
      this.fetchGIFs()
    }

    render(){
        return(
            <div>
                <GifList list={this.state.gifs}/>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
            </div>
        )
    }
}

export default GiftListContainer