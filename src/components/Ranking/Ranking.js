import React from 'react';
import ImageListItem from '../ImageListItem/ImageListItem';
import './Ranking.css';
//import ImagesList from '../components/ImageList/ImagesList';

// buttons
// this takes imageDataList data props and creates jsx blocks for each element in the list
// each element has an image and a thumbs up button. 
// the thumbs up button, on click, increments the element's score by 1



 
 function Ranking( props ) {
    const handleScoreUpdate = (index) => {
        const updatedList = [...props.list];
        updatedList[index].score += 1;
        props.setList(updatedList);
      };
    const handleRankingArray = () => {
        const newDataList = [...props.list];
        newDataList.sort((a, b) => b.score - a.score);
        props.setList(newDataList); 
      }

 return (
  <ul>
   {props.list.map((imageData,index) => (
    <li key={index}>
     {/* <img alt={props.comment} src={props.file}/> */}
     {/* <ImagesList post={posts}/> */}
     <ImageListItem  
        name={imageData.name}
        comment={imageData.comment}
        image={imageData.file}
        score={imageData.score}
     />
     <button className= 'rank'
      onClick={() => {
        handleScoreUpdate(index)
        handleRankingArray()
      }}>
      {'👍'}
     </button>
    </li>
   ))}
  </ul>
 );
}
export default Ranking;

// const posts = imageDataList.map((imageData, index) => (
//     <ImageListItem  name={imageData.name}
//    comment={imageData.comment}
//     file={imageData.file} />
//   ));