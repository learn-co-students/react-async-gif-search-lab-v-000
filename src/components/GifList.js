import React from 'react'

const GifList = ( {animals} ) => {
 
    let returnVal;

    const style = {
        listStyleType: "none"
    }


    if (animals.length === 0 ) {
        const animals = [{images: {original: {url: "https://media3.giphy.com/media/eYilisUwipOEM/giphy.gif?cid=a0a8070acscxynu1xw6pgwsy1dfwbua1p4q4pxlmnahjwdz0&rid=giphy.gif"}}}, {images: {original: {url: "https://media3.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=a0a8070aydk41rii85r5eogxqjof13rltrxntr2y1dgxqffi&rid=giphy.gif"}}}, {images: {original: {url: "https://media2.giphy.com/media/QXNrujD7GeWDm/giphy.gif?cid=a0a8070abks5ri73hp3p9smld6qngi4q7eu57d8uvi3ls44r&rid=giphy.gif"}}}]
            
        returnVal =   <div>
            <ul style = {style}>
                <li><img height="300px" width="300px" src={animals[0].images.original.url} alt=''/></li>
                <li><img height="300px" width="300px" src={animals[1].images.original.url} alt=''></img></li>
                <li><img height="300px" width="300px" src={animals[2].images.original.url} alt=''></img></li>
            
            </ul>
        
        </div>
        // returnVal = <div>Loading...</div>
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