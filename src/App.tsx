import './App.css'
import Form from './pages/Form'
import Home from './pages/Home';
import First from './components/First';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);
  const res = localStorage.getItem("formData");

  useEffect(() => {
    if (res !== null) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<First />}>
          <Route index element={<Form isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
