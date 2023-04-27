import React from 'react';
import './ImageListItem.css';

function ImageListItem(props) {
    return (
        <div className="image-container" key={props.index}>
          <p className='name-form'>Posted by: {props.name}</p>
          <img className="image-form" src={props.image} alt={props.comment} />
          <p className='comment-form'>{props.comment}</p>
          <h4 className = 'score'>👍🏽 {props.score}</h4>
        </div>
    );
}

export default ImageListItem;