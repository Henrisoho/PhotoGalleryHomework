import { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";

function GalleryItem({ getImage, image }) {
    const [flip, setFlip] = useState(false);
    const handleFlip = () => { setFlip(!flip); }

    if (flip === false) {
        return (
            <>
                <div className="float-child" key={image.id}>
                    <img src={image.path} alt={image.description} onClick={handleFlip} />
                    <LikeButton image={image} getImage={getImage} />
                    <p>Likes {image.likes}</p>
                </div>
            </>
        )

    } else {
        return (
            <>
                <div className="float-child" key={image.id}>
                    <img src={image.path} alt={image.description} onClick={handleFlip} />
                    <LikeButton image={image} getImage={getImage} />
                    <p>{image.description}</p>
                </div>
            </>
        )
    }
}

export default GalleryItem;