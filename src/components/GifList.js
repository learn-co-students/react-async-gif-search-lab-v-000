// presentational component
// render a top level <ul> with each gif as an <li>.
// map over props to display them

import React from 'react'
import GifListContainer from '../containers/GifListContainer'

// class GifList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <ul>
//         {props.gifs.map(gif => (
//           <li>
//             <img src={gif} alt={gif} />
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }
//

// export default GifList

const GifList = props =>
  <ul>
    {props.gifs.map(gif => (
      <li><img src={gif} alt={gif} /></li>
    ))}
  </ul>

export default GifList
