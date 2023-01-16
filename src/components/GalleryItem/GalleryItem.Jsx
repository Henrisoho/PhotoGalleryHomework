import { useState } from 'react';
import axios from 'axios';
import likeButton from '../LikeButton/LikeButton';
//^ importing all necissary functions to load our gallery images//

function GalleryItem({ images, getImages }) {
//over arching Gallery Items function controls how our gallery items are displayed
//it also handles our flip action so when an image is interacted with it shows
//the images description
    const [flip, setFlip] = useState(false);
//^use state allows us to recognize interaction with the flip function

    const handleFlip = () => {setFlip(!flip);}
    //^our handle flip function informs our if else that when the flip function
    //is interacted with it needs to be set to true or false depending on its 
    //current status
    return(
    flip === false ? (
            <div className="float-child" key={images.id}>
                <p className="name">{images.name}</p>
                <img src={images.path} alt={images.description} onClick={handleFlip} />
                <p><likeButton images={images} getImages={getImages} /></p>
                <p>Likes {images.likes}</p>
            </div>
        
     ) : (
            <div className="float-child" key={images.id}>
                <p className='name'>{images.name}</p>
                <img src={images.back} alt={images.description} onClick={handleFlip} />
                <p><likeButton images={images} getImages={getImages} /></p>
                <p>Likes {images.likes}</p>
            </div>
     )
    )
    //return if else determines whether you see the description or not based on the
    //status of the set flip boolean
}

export default GalleryItem;