import React from 'react'
import Menu from '../menu/Menu'
// import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">

        </div>
        {/* This 👇 returns an <ul>  */}
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar
