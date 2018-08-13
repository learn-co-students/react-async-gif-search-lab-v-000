import React from 'react'
import GifSearch from '../components/GifSearch'
 export default class GifListContainer extends React.Component{
    constructor(){
        super()
        this.state={
            data:""
        }
    }

     handleSubmit=(event)=>{
        const query=(function(){
            if(event.target.value!==""){
                return "?="+event.target.value
            } else {
                return ""
            }
        })


        fetch("http://api.giphy.com/v1/gifs/search"+query+"&api_key=dc6zaTOxFJmzC&rating=g")
            .then(response=>response.json)
            .then(data=>{
                this.setState({
                    data: data,
            })}
        )
    }

   

    render(){
        return(
            <div>
                <GifSearch onSubmit={this.handleSubmit}/>
                <GifListContainer />
            </div>
        )
    }
}
