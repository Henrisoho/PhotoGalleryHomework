import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField } from '@mui/material';

function AddImage({getImage}){
let [newPath, setNewPath] = useState('');
let [newDescription, setNewDescription] = useState('');
let [likes, setLikesStatus] = useState(0);

 const postImage = () => {
    axios.post('/gallery', {path : newPath, description: newDescription, likes : likes})
      .then(response => {
        setNewPath('');
        setNewDescription('')
        setLikesStatus(0);
        getImage();
      })
      .catch(err => {
        alert('Error Adding Image');
        console.log(err);
      })
  };

const handleSubmit = (event) => {
    event.preventDefault();
    if (newPath) {
      postImage();
    }
    else {
      alert('dont forget to add an image!');
    }
  }


return(
<>
<h2>Add an image</h2>
<form onSubmit={handleSubmit}>
        <label>
          Image: 
        </label>
        <input
          type="text"
          placeholder="url"
          value={newPath}
          onChange={(evt) =>  setNewPath(evt.target.value)}
        />
        <label>
          Caption:
        </label>
        <input
          type="text"
          placeholder="Caption"
          value={newDescription}
          onChange={(evt) =>  setNewDescription(evt.target.value)}
        />
        <button type="submit">Post</button>
      </form>
</>
);
}

export default AddImage;