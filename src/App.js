import './App.css';
import React, { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Message from './components/pages/Message';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/message' element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
