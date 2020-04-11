import React from 'react';

class GifList extends React.Component {

    render() {
        return (
            <div className='gifs'>
                <ul>
                    {this.props.gifURLs.map(url => <img key={url} src={url} alt='gif result' />)}
                </ul>
            </div>
        );
    }
}

export default GifList;