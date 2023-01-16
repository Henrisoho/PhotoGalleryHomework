import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'


function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages();
}, []);

  const getImages = () => {
    axios.get('/gallery').then((response) => {
      const images = response.data;
      setImages(images);
    }).catch((error) => {
      console.log('get route', error);
    })
  }
    return (
      <div className="App">
        <Header />
        <div>
          <GalleryList images={images} getImages={getImages}/>
        </div>
        <Footer />
      </div>
    );
}

export default App;