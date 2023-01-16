import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

//Over Arching app function determins what react displays on the dom//
function App() {
  const [images, setImages] = useState([]);
  //^ use state allows us to manipulate the dom and make efficient changes//

  useEffect(() => {
    getImages();
}, []);
//^ use effect is like our on ready//

  const getImages = () => {
    axios.get('/gallery').then((response) => {
      const images = response.data;
      setImages(images);
    }).catch((error) => {
      console.log('get route', error);
    })
  }
  //^ get route to recieve images from our local file with post data//
    
    return (
      <div className="App">
        <Header />
        <div>
          <GalleryList images={images} getImages={getImages}/>
        </div>
        <Footer />
      </div>
    );
//^ return function control the actual look and output of our data//

}


export default App;