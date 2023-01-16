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
  
  export default GalleryList;