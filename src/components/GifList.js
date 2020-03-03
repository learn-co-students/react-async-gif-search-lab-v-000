import React from 'react';


export default class GifList extends React.Component {

    render(){
        return (
            <ul>
            {this.props.gifs.map(g => 
                <li key={g.url}><img src={g.url} alt='gif'/></li>)}
            </ul>
        )
    }
}