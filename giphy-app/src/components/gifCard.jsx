// return(<div>
//     <img key = {gif.id + ind} src = {gif.images.fixed_height.url}/>
//     <p>
//         {gif.title}
//     </p>
//     </div>
//     )

import React from 'react';
import './giphy.css';

const GifCard = ( gif ) => {
    console.log(gif);
    const imageUrl = gif.gif.images.fixed_height.url;
    const title = gif.gif.title;
    //const {imageUrl} = url;
    console.log(title);

    return (
        <div>
            <div className='gif-table'>
                <div className='gif-image'>
                    <img src = {imageUrl}></img>
                </div>
                <div className='gif-info'>
                    <h3>{title}</h3>
                <p>URL: {imageUrl}</p>
                </div>
            </div>
            <br></br>
        </div>
        
    );
};

export default GifCard;