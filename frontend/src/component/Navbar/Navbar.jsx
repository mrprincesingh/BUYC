import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav id="navbar" class="">
  <div class="nav-wrapper">
    {/* <!-- Navbar Logo --> */}
    <div class="logo">
   {/* //   Logo Placeholder for Inlustration  */}
      <a><i class="fas fa-chess-knight"></i> BYUC</a>
    </div>

    {/* <!-- Navbar Links --> */}
    <ul id="menu">
      <li><a>Home</a></li>
   <li><a >Sign Up</a></li>
   <li><a>Profile</a></li>
   <li><a>Logout</a></li>
    </ul>
  </div>
</nav>



<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>


<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
    </div>
  )
}

export default Navbar