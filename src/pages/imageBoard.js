import React from 'react';
import SubmitForm from '../components/SubmitForm/SubmitForm';
import ImagesList from '../components/ImageList/ImagesList';


const ImageBoard = () => {



  return (
    <div>
    <SubmitForm/>
    <ImagesList post={posts}/>
      
    </div>
  );
};
  
export default ImageBoard;

// state hook to render img/text is a no gooo- need local storage so it remains after refresh