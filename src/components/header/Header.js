import React, {useState, useEffect, isValidElement} from 'react'
import { Link } from "gatsby"
import MenuList from '../../data/menuList.json'

import Navbar from '../navbar/Navbar'

import { FaPhoneAlt } from 'react-icons/fa';

import './Header.css'

function Header({location}) {
  const menu = MenuList.content

  function updateMenu() {
    menu.forEach(item => {
      if(item.subMenu) {
        item.expanded = false
        item.subMenu.forEach(item => {
          if(item.subSubMenu) {
            item.expanded = false
          }
        })
      }
    })
  }
  updateMenu()

  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const handleClick = () => setIsOpen(!isOpen)

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
  }, [isBrowser])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  
  console.log('Header Rendered')

  return (
    <header className="shadow-sm">
      <div className="container">
        <div className="row">
          <nav className="w-100 p-0">
            <button id="menu-btn" type="button" 
              className="d-inline-block d-lg-none navbar-toggler" 
              style={isOpen ? {color: 'var(--main-turquoise)'} : {color: '#fff'}}
              onClick={handleClick}>MENU</button>
            {/* Main menu list */}
            <Navbar menu={menu} location={location}
              navbarSize={`${windowWidth > 991 ? 'navbar__menu--lg' : 'navbar__menu--sm'}`}
              isOpen={isOpen ? 'isOpen' : ''}/>

            <div className="float-end cta-btns">
              <div className="me-3 header-tel d-none d-sm-inline-block">
                <a href="tel:833-667-2967" className="d-nline-block">
                  <span><FaPhoneAlt /></span>&nbsp; 1-833-NO-RAZOR
                </a>
              </div>
              <div className="d-inline-block">
                <Link className="cta-btn red-bg-btn py-2 px-3 smooth" to="#consult">FREE CONSULT</Link>
              </div>
					  </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
