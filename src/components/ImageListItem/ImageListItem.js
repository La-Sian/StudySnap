import React from 'react';


function ImageListItem(props) {
    return (
        <div key={props.index}>
        <p>Name: {props.name}</p>
          <p>Comment: {props.comment}</p>
          <img src={props.file} alt="uploaded" />
        </div>
    );
}

export default ImageListItem;