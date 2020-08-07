import React from 'react'

const GifList = ( {animals} ) => {
 
    let returnVal;

    const style = {
        listStyleType: "none"
    }


    if (animals.length === 0 ) {
            returnVal =  <div>Loading...</div>
        }
    else {
        returnVal = 
            <div>
                <ul style = {style}>
                    <li><img height="300px" width="300px" src={animals[0].images.original.url} alt=''/></li>
                    <li><img height="300px" width="300px" src={animals[1].images.original.url} alt=''></img></li>
                    <li><img height="300px" width="300px" src={animals[2].images.original.url} alt=''></img></li>
                
                </ul>
            
            </div>
       
        }

    return returnVal
}



export default GifList