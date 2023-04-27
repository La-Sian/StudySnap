
import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
import SubmitForm from '../components/SubmitForm/SubmitForm';
import './topic.css';
  
const Topic = () => {




  return (
    <div className= 'topic'>
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        </nav> */}
      <h1>Week 1 Topic List</h1>
      <LinkButton path={'/imageBoard'} innerText={'Computational Thinking'}/>
      <LinkButton path={'/imageBoard'} innerText={'Git Basics'}/>
      <LinkButton path={'/imageBoard'} innerText={'Javascript Basics'}/>
    </div>
  );
};
  
export default Topic;

// import button link