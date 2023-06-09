import React from 'react';
import { Link } from 'react-router-dom';
import "./LinkButton.css"

function LinkButton(props) {
    return (
        <>
    {/* Link tag is used to navigate to the page that is referenced in the to attribute. */}
      <Link to={props.path}>
      <button className = "link-button">{props.innerText}</button>
     </Link>
     </>
    );
}

export default LinkButton;