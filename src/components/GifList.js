import React from 'react'



class GifList extends React.Component {

    //receives data from its props and renders html given the input data. 
    //It can render a top level <ul> with each gif as an <li>.

    listingGifs(gifs){
        console.log(gifs)
        return gifs.map(gif => {
            return <li><img src={gif.images.original.url} alt="some pic"/></li>
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.listingGifs(this.props.threeGifs)}
                </ul>

            </div>
        )

    }


}

export default GifList