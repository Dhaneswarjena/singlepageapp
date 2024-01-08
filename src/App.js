import React from 'react'
import '../src/Styles/Common.scss'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header'
import About from './Component/About'
import Product from './Component/Product'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Brand from './Component/Brand'

const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/brand" element={<Brand />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Loading Data</div>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App