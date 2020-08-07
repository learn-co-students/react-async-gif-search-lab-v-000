import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {animals: []}
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    mySubmitHandler(event) {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=Nq12I5SqA3vjS2BoE0X1vCV8yZT37pJI`)
        .then(response => response.json())
        .then(data => { console.log(data)
            const threeAnimals = []
            for(let i = 0; i < 3; i++) {
                threeAnimals.push(data.data[i])
                
            }
            this.setState({animals: threeAnimals})
           
        })      
    }

    render() {
        return (
            <div>
                <GifSearch mySubmitHandler={this.mySubmitHandler}/>
                <GifList animals={this.state.animals} />
            </div>
            )
    }


    






}

export default GifListContainer