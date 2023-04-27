
import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
// import SubmitForm from '../components/SubmitForm/SubmitForm';
import './topic.css';
  
const Topic = () => {




  return (<div>
    <nav className='home-button-topic'>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        </nav> 
    <div className= 'topic'>
      <h1>Week 1 Topic List</h1>
      <div className='topic-container'>
      <LinkButton path={'/imageBoard'} innerText={'Problem Solving'}/>
      <LinkButton path={'/imageBoard'} innerText={'Git Basics'}/>
      <LinkButton path={'/imageBoard'} innerText={'Javascript Basics'}/>
    </div>
    </div>
    </div>
  );
};
  
export default Topic;

// import button link