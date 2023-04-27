import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
import './index.css';
import logo from './backgroundImg/SSlogo.png';

const Home = () => {
  return (
    <div className='page'>
      <div className="sidebar">
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        </nav> */}
      <h1><img className="logo" src={logo} alt="logo"/></h1>
      <h4 className="subheading">Introducing StudySnap{"\u2014"}the app that makes studying easier and more collaborative than ever before.</h4>
      <p> 
      With StudySnap, you can focus on listening and engaging during lectures, knowing the best slides will be available for review later.
      <br></br><br></br>
      Simply choose your "essential screenshot"{"\u2014"}the one moment that best summarizes the entire lecture{"\u2014"}and upload it to the platform. Or, browse through and rate what others have chosen. Download your favorite as an easy-to-remember "take-home" lesson.
      <br></br><br></br>
      StudySnap is more than just a platform for sharing slides{"\u2014"}it's a community of students passionate about learning and helping each other succeed. Collaborate with your peers, discover new insights, and revolutionize the way you learn. Get snapping today!
      <br></br><br></br>
      </p>
</div>
      {/* Link tag is used to navigate to the page that is referenced in the to attribute. */}
      <div className='grid-container'>
      <div className='button-grid'>
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
    </div>
    </div>
    
  );
};
  
export default Home;

// import link button