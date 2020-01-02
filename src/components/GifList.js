import React from 'react';



export default class GifList extends React.Component {
    
    imgURLS() {
        let imgURLs = [];
        this.props.images.map(image => imgURLs.push(image.images.original.url))
        return imgURLs;
    }
    
    render(){
        return(
            <div>
                <ul>
                    {this.imgURLS().map(image => <img src={image} alt={image.id}/>)}
                </ul>
            </div>
        )
    }

}