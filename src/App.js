import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home.jsx'
// import Footer from './Components/Footer/Footer'
// import About from './pages/About/About'
import Products from './pages/Products/Products'
import Contacts from './pages/Contacts/Contacts'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
