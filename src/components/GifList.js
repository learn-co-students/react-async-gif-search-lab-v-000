// import React from 'react'
//
// class GifList extends React.Component {
//   // this.props.gifs
//
//   render() {
//     return(
//       <div>
//         <li><img alt={this.props.gifURL} src={this.props.gifURL} /></li>
//       </div>
//     )
//   }
// }
//
// export default GifList



import React from 'react'

const GifList = (props) => {
  return(
    <div>
      <li><img alt={props.gifURL} src={props.gifURL} /></li>
    </div>
  )
}

export default GifList
