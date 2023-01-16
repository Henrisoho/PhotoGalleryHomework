import { useState } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import App from '../../App/App';
//^ importing all necissary functions to load our gallery images//

function GalleryItem({ images, getImages }) {
//over arching Gallery Items function controls how our gallery items are displayed
//it also handles our flip action so when an image is interacted with it shows
//the images description
    const [flip, setFlip] = useState(false);
//^use state allows us to recognize interaction with the flip function

    const handleFlip = () => {setFlip(!flip);}
    // our handle flip function informs our if else that when the flip function
    //is interacted with it needs to be set to true or false depending on its 
    //current status
console.log(images.id)
    if (flip === false) {
        console.log(images.id)
        return (
            <div className="float-child" key={images.id}>
                <img src={images.path} alt={images.description} onClick={handleFlip} />
                <LikeButton images={images} getImages={getImages} />
                <p>Likes {images.likes}</p>
            </div>
        )
    } else {
        console.log(images.id)
        return (
            <div className="float-child" key={images.id}>
                <img src={images.path} alt={images.description} onClick={handleFlip} />
                <LikeButton images={images} getImages={getImages} />
                <p>Likes {images.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;