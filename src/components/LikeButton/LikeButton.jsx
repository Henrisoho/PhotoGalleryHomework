import React from 'react';
import axios from 'axios';

function LikeButton({ image, getImage }) {
    const handleLike = (event) => {
        event.preventDefault();
        putLike({ image, getImage });
    }

    const putLike = ({ image, getImage }) => {
        console.log('you liked images', image.id);
        axios.put(`/gallery/${image.id}`)
            .then(response => {
                getImage();
            })
            .catch(err => {
                alert('Error in PUT route');
                console.log(err);
            })
    }

    return (
        <button type="button" onClick={handleLike}>
            Like
        </button>
    )
}

export default LikeButton;