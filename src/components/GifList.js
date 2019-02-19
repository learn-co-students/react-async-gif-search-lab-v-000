import React from 'react'

export default function GifList(props) {
    console.log("Inside GifList the props are: ", props)
    return (
        <div>
            <ul>
            
            {
                // If the response is no longer null, then
                props.data ? props.data.map((item,index) => {
                    return (<li key={index}><img src={item.images.original.url} alt='' /></li>)
                }) : (<p>No data.</p>)
            }
              
            </ul>
            </div>
            )
        }
        