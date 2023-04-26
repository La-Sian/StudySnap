import React, { useState, useEffect } from "react";
import ImageListItem from "../ImageListItem/ImageListItem";
import ImagesList from "../ImageList/ImagesList";

function SubmitForm() {
  const [name, setName] = useState(""); // store the name of the user with handleNameChange function
  const [comment, setComment] = useState(""); // store the comment of the user with handleCommentChange function
  const [file, setFile] = useState(null); // store the file of the user with handleFileChange function
  const [imageDataList, setImageDataList] = useState([]); // store the image data (including name and comment) of the user in an Array

  // The code below is using the useEffect hook to run a function when the SubmitForm component mounts for the first time. The function retrieves the imageDataList data from the local storage using localStorage.getItem() method. If the imageDataList data is present in the local storage, it is parsed into a JavaScript object using JSON.parse() method and the resulting data is then set to the imageDataList state variable using setImageDataList() method.
  // The useEffect hook has an empty dependency array [], which means that the function inside it will only be run once, during the initial mount of the component. This ensures that the data is only retrieved from local storage once when the component is first rendered, and not on every subsequent re-render.
  //In summary this basically takes whatever is in localstorage and shoves it into the imageDataList state variable on each page refresh.
  useEffect(() => {
    const savedImageDataList = localStorage.getItem("imageDataList");
    if (savedImageDataList) {
      const parsedDataList = JSON.parse(savedImageDataList);
      setImageDataList(parsedDataList);
      
    }
  }, []);

  // the functions below are to store the data from the form in the state variables
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  // the function below is to store the file in the state variable and check if the file is smaller than 5MB
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("Please select a file smaller than 5MB");
    }
  };

  // the function below is to pass the data from the form into the imageDataList state variable and then store the resulting imageDataList state variable in the local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !comment || !file) {
      alert("Please fill in all fields");
    } else {
      // The code below is creating a new FileReader object that allows reading the contents of uploaded files. The readAsDataURL() method of the FileReader object is then called with the uploaded file passed as an argument. It reads the contents of the selected file and converts it to a data URL string.
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // The onload property of the FileReader object is then set to a callback function that will be called once the file has finished loading. In this callback function, a new object imageData is created that contains the name, comment, and file properties. The name and comment properties are set to the current values of the name and comment state variables respectively, while the file property is set to the result of the readAsDataURL() method, which is the data URL string representation of the selected file.
      reader.onload = () => {
        const imageData = {
          name: name,
          comment: comment,
          file: reader.result,
        };
        console.log("Image data:", imageData);
        console.log(imageDataList);

        //The code below is using the setImageDataList function to update the imageDataList state variable. The new value of imageDataList is computed based on the previous value of imageDataList (passed as prevImageDataList) and a new object imageData that was created earlier in the code.
        // Specifically, the code creates a new array updatedImageDataList by spreading the previous value of imageDataList and appending the new object imageData. The localStorage.setItem method is used to store the updated updatedImageDataList in the browser's local storage as a JSON string, so that it can be accessed and used later.

        // Finally, the setImageDataList function is called with the updated updatedImageDataList as an argument and this new value is returned by the function, updating the imageDataList state variable with the new value.

        // The prevImageDataList parameter of the setImageDataList function refers to the previous value of the imageDataList state variable, which is passed as an argument to the function. This parameter is used to compute the new value of imageDataList, as explained above.
        setImageDataList((prevImageDataList) => {
          const updatedImageDataList = [...prevImageDataList, imageData];
          localStorage.setItem(
            "imageDataList",
            JSON.stringify(updatedImageDataList)
          );
          return updatedImageDataList;
        });
        // reset the form after submitting
        setName("");
        setComment("");
        setFile(null);
      };
    }
   
    
  };

  const posts = imageDataList.map((imageData, index) => (
    <ImageListItem  name={imageData.name}
   comment={imageData.comment}
    file={imageData.file} />
  ));
    
  return (
    <div>
      <h1>Image Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Comment:
          <input type="text" value={comment} onChange={handleCommentChange} />
        </label>
        <label>
          Image: <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <ImagesList post={posts}/>

    </div>
  );
}


export default SubmitForm;

