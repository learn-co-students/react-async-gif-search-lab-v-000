import React, { Component } from "react";

class GifList extends Component {

    render () {
        return (
            <div>
                <h2>Search Results</h2>
                <ul>
                    {/* {console.log(this.props.results)} */}
                    {this.props.results.map((result) => (
                        <li><img src={result.images.original.url} alt="Search Results"/></li>
                    ))}
                </ul>
            </div>
        );
    }
    
}

export default GifList
