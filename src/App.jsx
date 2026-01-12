import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Dealers from "./pages/Dealers"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/dealers' element={<Dealers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
