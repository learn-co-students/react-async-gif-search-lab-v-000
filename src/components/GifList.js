import React, { Component } from 'react'

class GifList extends Component {
    
    render() {
        return (
              <ul className="link_holder">
                {this.props.gifLinks.map((link, id) => {
                    return <li><img src={link} /></li>
                })}
              </ul>
            )
    }
    
}

export default GifList