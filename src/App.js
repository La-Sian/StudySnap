import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import ImageBoard from './pages/imageBoard';
import Topic from './pages/topic';

  
function App() {

return (
      
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/topic' element={<Topic/>} />
        <Route path='/imageBoard' element={<ImageBoard/>} />
    </Routes>
    </Router>

);
}
  
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
