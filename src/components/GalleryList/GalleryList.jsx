import React from 'react';
import GalleryItem from '../GalleryItems/GalleryItems';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import LikeButton from '../LikeButton/LikeButton';


function GalleryList({ images, getImage }) {
// console.log(images.id)
    return (
        <Box p={2}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.path}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.description}
            loading="lazy"
            
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
    )
  }
  //gallery list takes and loops through our photos to display them//
  export default GalleryList;