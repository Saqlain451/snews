
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGlobalHook } from './Hooks/Context';
import ScrollToTop from './Component/ScrollToTop'
import Home from './Pages/Home/Home'
import News from './Pages/News/News'
import Navbar from './Pages/Navbar/Navbar'

import Contact from './Pages/Contact/Contact';
const App = () => {
  const { isDark } = useGlobalHook();
  return (
    <div className={isDark ? "dark" : "light"}>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/news" element={<News/>} />
          <Route path='/search' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App