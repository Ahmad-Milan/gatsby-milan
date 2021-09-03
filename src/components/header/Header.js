import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"
import MenuList from '../../data/menuList.json'

import Navbar from '../navbar/Navbar'

import { FaPhoneAlt } from 'react-icons/fa';

import './Header.css'

function Header() {
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

  // See note below **
  useEffect(() => {
    let mounted = true
    if(isBrowser && mounted) {
      window.addEventListener("resize", handleResize)
      setWindowWidth(window.innerWidth)
    }
    return () => mounted = false
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
            <Navbar menu={menu} closeMenu={handleClick}
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


/** Note
Every time our effect will run, we are setting a local variable mounted to true, 
we set it to false on the cleanup function of the effect (like suggested by react). 
And most importantly, we are updating the state if and only if that value is true, 
that is if the component is un-mounted meaning our variable is set to false, it wont enter the if block.
refere to: https://www.debuggr.io/react-update-unmounted-component/
*/