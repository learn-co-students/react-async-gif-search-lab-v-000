import React from 'react'

//another way to define a component but doesnt work either
// const GifList = props => {
//     return(
//         <ul>
//           {props.gifs.map((gif, index) => 
//             <li key={index}>
//               <img src={gif.images.original.url} alt=""/>
             
//             </li>
//           )}
//         </ul>
//       )
//  }

 class GifList extends React.Component{

     render(){
         return(
            <ul>
         {this.props.gifs.map(
                (gif, index) => 
              <li key={index}> <img key={gif.url} src={gif.images.original.url} alt="gif"/> </li>          
            )} 
          
          </ul>
         )
     }
 }


export default GifList
