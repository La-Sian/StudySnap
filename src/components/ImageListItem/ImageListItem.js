import React from 'react';
import './ImageListItem.css';

function ImageListItem(props) {
    return (
        <div className="image-container" key={props.index}>
        <p className='name-form'>Name: {props.name}</p>
          <img className="image-form" src={props.file} alt="uploaded" />
          <p className='comment-form'>Comment: {props.comment}</p>
        </div>
    );
}

export default ImageListItem;