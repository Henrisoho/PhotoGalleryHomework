import React from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';;
import Box from '@mui/material/Box';


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
        <Box>
        <IconButton 
        onClick={handleLike}
        aria-label="like"
        sx={{ 
        width: "max-content", 
        color: "#000", 
        }}
        >
            <FavoriteIcon />
        </IconButton>
        </Box>
    )
}

export default LikeButton;