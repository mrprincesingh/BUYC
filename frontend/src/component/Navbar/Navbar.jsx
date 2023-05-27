import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav id="navbar" class="">
  <div class="nav-wrapper">
    {/* <!-- Navbar Logo --> */}
    <Link to="/">
    <div class="logo">
   {/* //   Logo Placeholder for Inlustration  */}
      <a><i class="fas fa-chess-knight"></i> BYUC</a>
    </div>
    </Link>
    {/* <!-- Navbar Links --> */}
    <ul id="menu">
     <Link to="/"> <li><a>Home</a></li></Link>
     <Link to="/signup"><li><a >Sign Up</a></li></Link>
     <Link to="/profile"><li><a>Profile</a></li></Link>
  
    </ul>
  </div>
</nav>



<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>


<div class="overlay-menu">
  <ul id="menu">
  <Link to="/"> <li><a>Home</a></li></Link>
     <Link to="/signup"><li><a >Sign Up</a></li></Link>
     <Link to="/profile"><li><a>Profile</a></li></Link>
   
    </ul>
</div>
    </div>
  )
}

export default Navbar