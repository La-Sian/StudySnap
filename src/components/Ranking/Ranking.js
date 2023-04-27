import React from 'react';

// buttons
 function Ranking(props) {
    
 return (
  <ul>
   {props.todos.map((todo, index) => (
    <li key={index}>
     <img alt={props.comment} src={props.file}/>
     <button className= 'rank'
      onClick={() => {
       props.score +=1;
      }}>
      {'👍🏽'}
     </button>
    </li>
   ))}
  </ul>
 );
}
export default Ranking;