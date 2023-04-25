import React from 'react';
import { Link } from 'react-router-dom';
  
const Home = () => {
  return (
    <div>
      <h1>StudySnap</h1>
      {/* Link tag is used to navigate to the page that is referenced in the to attribute. */}
      <Link to="/topic">
       <p>hello</p>
      </Link>
      
    </div>
    
  );
};
  
export default Home;
