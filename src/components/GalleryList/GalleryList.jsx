import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem.Jsx";

function GalleryList({ images, getImages }) {

    return (
        images.map((images) => {
            return (
            <GalleryItem images={images} key={images.id} getImages={getImages}/>
            )
        })
    )
  }
  //gallery list takes and loops through our photos to display them//
  export default GalleryList;