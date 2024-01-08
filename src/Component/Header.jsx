import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.scss'
const Header = () => {
  return (
    <>
    <nav>
      <h1>CodeTech.</h1>
      <main>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/brand">Brand</Link>
        <Link to="/contact">Contact</Link>
      </main>
    </nav>
    </>
  )
}

export default Header