import './App.css';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import WebDesign from './Pages/WebDesign';
import WebsiteContentWriting from './Pages/WebsiteContentWriting';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/webdesign" element={<WebDesign/>}/>
    <Route path="/websitecontentwritting" element={<WebsiteContentWriting/>}/>
   
    {/* Add more routes as needed */}
  </Routes>
  </BrowserRouter>

  )
}

export default App;
    