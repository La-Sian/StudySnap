import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton/LinkButton';
import './index.css';


const Home = () => {
  return (
    <div className='page'>
      <h1>StudySnap</h1>
      <p> Introducing StudySnap – the app that makes studying easier and more collaborative than ever before. With StudySnap, students can post and upvote their favorite essential slides from lectures or presentations, allowing everyone to benefit from the best take-home slides.

Gone are the days of frantically taking notes during a lecture and struggling to keep up with the pace of the presentation. With StudySnap, you can focus on listening to the lecture and engaging with the content, knowing that the best slides will be available for review later.

But StudySnap is more than just a platform for sharing slides – it's a community of students who are passionate about learning and helping each other succeed. With the ability to upvote and comment on slides, you can collaborate with your peers and discover new insights and perspectives on the material.

So why wait? Download StudySnap today and join the community of students who are revolutionizing the way we study and learn.</p>

      {/* Link tag is used to navigate to the page that is referenced in the to attribute. */}
      <LinkButton path={'/topic'} innerText={'Week 1'}/>
      <LinkButton path={'/week2topics'} innerText={'Week 2'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 3'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 4'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 5'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 6'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 7'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 8'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 9'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 10'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 11'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 12'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 13'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 14'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 15'}/>
      <LinkButton path={'/week3topics'} innerText={'Week 16'}/>
    </div>
    
  );
};
  
export default Home;

// import link button
// 
