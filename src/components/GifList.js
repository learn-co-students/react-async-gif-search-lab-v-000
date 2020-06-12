import React from 'react'

const GifList = (props) => {
    
  return (
      
    <div>
    	<table width="100%" border="0">
 				<tr>  
        	{props.gifs.map(gif => <td><img key={gif.url} src={gif.url} alt="gif"/></td>)}
        </tr>
			</table>
    </div>
  )
}

export default GifList;


