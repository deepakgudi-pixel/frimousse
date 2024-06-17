import { useState } from 'react'

import Home from './pages/home/Home'
import About from "./pages/about/About";


import Menu from './components/menu/Menu'
import { Routes, Route, useLocation } from "react-router-dom";
import Work from './pages/work/Work';


import { AnimatePresence } from "framer-motion";
import Contact from './pages/contact/Contact';


function App() {

  

  const location = useLocation();
  const showFooter = location.pathname !== "/"
 
  return (
    <>
      <Menu />
      <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
       </AnimatePresence>
    </>
  )
}

export default App
