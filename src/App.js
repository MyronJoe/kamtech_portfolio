import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])



  return (
    <>

      {
        loading ?

          <div className='loader'>
            <ScaleLoader
              color={'#00007C'}
              loading={loading}
              // cssOverride={override}
              size={60}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>

          :

          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>

      }

    </>
  );
}

export default App;
