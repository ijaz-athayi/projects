import React from 'react'
import '../css/navbar/navbar.css'

const Navbar = () => {
  return (
    <div id='navbody'>

      <nav>
        <ul>
          <li><a href="/piano24">24keys</a></li>
          <li><a href="/piano88">88keys</a></li>
          <li><a href="/calculator">calculator</a></li>
          <li><a href="/webcam">webcam</a></li>
          <li><a href="/login">loginpage</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
