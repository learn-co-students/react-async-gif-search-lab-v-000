import React from 'react';

class GifList extends React.Component {


    listGifs(){
        return this.props.gifResults.map(gif => <li key={gif.id}><img src={gif.images.fixed_height.url}  alt={gif.slug} /></li>)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.listGifs()}
                </ul>
            </div>
        );
    }
}

export default GifList;