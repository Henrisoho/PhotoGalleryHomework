import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GalleryItem from '../GalleryItems/GalleryItems';
import GalleryList from '../GalleryList/GalleryList';
import AddImage from '../AddImage/AddImage';


function App() {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    axios.get('/gallery').then((response) => {
      console.log('This is the response from GET /gallery: ', response.data);
      if(imageList != null){
      setImageList(response.data);
      }
    }).catch((error) => {
      console.log('Error in GET /gallery: ', error);
    })
  }


  return (
    <div className="App">
      <Header />
      <AddImage getImage ={getImage}/>
      <GalleryList images={imageList} getImage ={getImage}/>
      <Footer/>
    </div>
  )

  }

export default App;
