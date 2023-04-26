
import React from 'react';
import LinkButton from '../components/LinkButton/LinkButton';
import SubmitForm from '../components/SubmitForm/SubmitForm';
  
const Topic = () => {




  return (
    <div>
      <h1>Our Lovely Topic</h1>
      <LinkButton path={'/imageBoard'} innerText={'Image Board'}/>
      <SubmitForm />
    </div>
  );
};
  
export default Topic;

// import button link