import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Home from './components/Home';
import LeftSidebar from './components/LeftSidebar';
import Navbarbottom from './components/Navbarbottom';
import RightSidebar from './components/RightSidebar';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/leftsidebar' element={<LeftSidebar />}/>
          <Route path='/home' element={<BlogList/>}/>
          <Route path='/rightsidebar' element={<RightSidebar/>}/>
        </Routes>
       <Navbarbottom/>
      </Router>
    </div>
  );
}

export default App;
