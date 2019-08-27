
import React from 'react'

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
   state = { gifs: [] };
    

    getGifs = (search = 'cats') => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(response => response.json())
          .then(({data}) => {
            this.setState({
                gifs: data.map( gif => ({ url: gif.images.original.url}) ) })
        
    })

    }

    render() {
        return(
			<div>
				<div>
					<GifList gifs={ this.state.gifs }/>
				</div>
				<div>
					<GifSearch getGifs={ this.getGifs }/>
				</div>
			</div>
		)
    }
    
    componentDidMount() {
    	this.getGifs()
	}
    
}
export default GifListContainer;