import { useState } from 'react';
import axios from 'axios';
import likeButton from '../LikeButton/LikeButton';

function GalleryItem({ images, getImages }) {

    const [flip, setFlip] = useState(false);

    const handleFlip = () => {setFlip(!flip);}


    if (flip === false) {
        return (
            <div className="float-child" key={images.id}>
                <p className="name">{images.name}</p>
                <img src={images.path} alt={images.description} onClick={handleFlip} />
                <p><likeButton images={images} getImages={getImages} /></p>
                <p>Likes {images.likes}</p>
            </div>
        )
    } else {
        return (
            <div className="float-child" key={images.id}>
                <p className='name'>{images.name}</p>
                <img src={images.back} alt={images.description} onClick={handleFlip} />
                <p><likeButton images={images} getImages={getImages} /></p>
                <p>Likes {images.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;