import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GiftListContainer extends React.Component {


    state = {
        threeGifs: []
    }
    
    
    

    

    componentDidMount() {
        this.fetchingGiphy();
    }

    // responsible for fetching the data from the giphy API, 
    // storing the first 3 gifs from the response in its component state, 

    fetchingGiphy(query = 'dog'){
        return(
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            console.log(this.state)
            this.setState({threeGifs: json.data.slice(0,3)})
            console.log(this.state.threeGifs)

            // and passing that data down to its child, the <GifList> component, as a prop.

            
        })
        //.then(({data}) => this.setState({threeGifs: data.slice(0,3)}))
        )
    }

    //also render a <GifSearch /> component that renders the form. 
    //<GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
    //ASK WHY YOU HAD TO BIND....
    render(){
        return (
            <div>
                <GifList threeGifs={this.state.threeGifs}/>
                <GifSearch fetchingGiphy={this.fetchingGiphy.bind(this)}/> 

            </div>
        )

    }



}

export default GiftListContainer