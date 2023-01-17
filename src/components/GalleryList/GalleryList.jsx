import React from 'react';
import GalleryItem from '../GalleryItems/GalleryItems';


function GalleryList({ images, getImage }) {
// console.log(images.id)
    return (
        images.map((image) => {
            return (
            <GalleryItem image = {image} key={image.id} getImage={getImage}/>
            )
        })
    )
  }
  //gallery list takes and loops through our photos to display them//
  export default GalleryList;