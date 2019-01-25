import React from 'React';

const GifList = props => {
    console.log(props);
    return (
        <div>
            <ul>
                {props.gif.map(gif => <li><img key={gif.url} alt="gif" /></li>)}
            </ul>
        </div>
    )
}
export default GifList;