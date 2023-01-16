import axios from 'axios';

function likeButton({ images, getImages }) {
    const handleLike = (event) => {
        event.preventDefault();
        console.log('clicked like');
        putLike({ images });
    }

    const putLike = ({ images, getImages }) => {
        console.log('you liked images', images.id);
        axios.put(`/gallery/like/${images.id}`)
            .then(response => {
                getImages();
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

export default likeButton;