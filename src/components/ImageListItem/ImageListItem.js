import React from 'react';
import './ImageListItem.css';

function ImageListItem(props) {
    return (
        <div className="image-container" key={props.index}>
        <p className='name-form'>Posted by: {props.name}</p>
          <img className="image-form" src={props.file} alt="uploaded" />
          <p className='comment-form'>{props.comment}</p>
        </div>
    );
}

export default ImageListItem;