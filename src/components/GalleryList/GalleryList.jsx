import React from 'react';
import GalleryItem from '../GalleryItems/GalleryItems';



function GalleryList({ images, getImage }) {
// console.log(images.id)
    return (
      <GalleryItem images={images} getImage={getImage}/>
    )
  }
  //gallery list takes and loops through our photos to display them//
  export default GalleryList;