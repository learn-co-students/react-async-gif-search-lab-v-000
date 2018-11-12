import React, { Component } from "react";

 class GifList extends Component {
   render(){
     return(
       <div>
          <ul>
            for each (gif in this.props.gifs) {
              <li><image src=gif></image></li>
            })
          </ul>
       </div>
     )
   }
}
export default GifList;