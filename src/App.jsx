import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from './pages/home/Home';
import About from "./pages/about/About";
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';

import Cursor from './components/customCursor/CustomCursor';
import Menu from './components/menu/Menu';

function App() {
  const location = useLocation();

  return (
    <>
      <Cursor />
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
  );
}

export default App;
