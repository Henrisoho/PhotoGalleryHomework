import React from 'react'
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import LikeButton from '../LikeButton/LikeButton';


function GalleryItem({ getImage, images }) {
    const [isFlipped, setIsFlipped] = useState (true);
    const handleFlipped = () => {
if (isFlipped === true){
    setIsFlipped(false);
}else {
    setIsFlipped(true)
}
}
    return(
        <>
            {isFlipped ? (
                <Box p={2} >
        <ImageList sx={{ width: 500, height: 600 }} cols={3} rowHeight={200}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.path}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.description}
            loading="lazy"
            onClick={handleFlipped}
          />
          <ImageListItemBar
            title={item.description}
            subtitle={<span>Likes {item.likes}</span>}
            position="below"
          />
          <LikeButton image={item} getImage={getImage}/>
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
            ):(
    <Box p={2}>
        <ImageList sx={{ width: 500, height: 600 }} cols={3} rowHeight={200}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
        <h2 onClick={handleFlipped}>{item.description} </h2>
          <ImageListItemBar
            title={item.description}
            subtitle={<span>Likes {item.likes}</span>}
            position="below"
          />
          <LikeButton image={item} getImage={getImage}/>
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
            )}     
            </> 
    )
}

export default GalleryItem;