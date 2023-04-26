import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
const Home = () => {
  return (
    <div>
      <h1>StudySnap</h1>

      {/* Link tag is used to navigate to the page that is referenced in the to attribute. */}
      
      <LinkButton path={'/topic'} innerText={'Week 1'}/>
      
    </div>
    
  );
};
  
export default Home;

// import link button
// 
