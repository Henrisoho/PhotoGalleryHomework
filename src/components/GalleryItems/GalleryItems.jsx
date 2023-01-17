import React from 'react'
import { useState } from "react";


function GalleryItem({ getImage, image }) {
    const [flip, setFlip] = useState(false);
    const handleFlip = () => { setFlip(!flip); }
    
}

export default GalleryItem;