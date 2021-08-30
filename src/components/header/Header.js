import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"

import Menu from '../nav/menu/Menu'

import { FaPhoneAlt } from 'react-icons/fa';

import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const [windowWidth, setWindowWidth] = useState(0)

  const handleClick = () => setIsOpen(!isOpen)

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    if(isBrowser) {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }else return
  }, [])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }


  return (
    <header className="shadow-sm">
      <div className="container-xl">
        <div className="row">
          <nav className="w-100">
            <button id="menu-btn" className="d-inline-block d-lg-none" type="button"
              onClick={handleClick}>MENU</button>
            {/* Main menu list */}
            <Menu navbarSize={`${windowWidth > 991 ? 'navbar__menu--lg' : 'navbar__menu--sm'}`} isOpen={isOpen ? 'isOpen' : ''}/>
            {/* ${isOpen ? 'isOpen' : '' } */}

            <div className="float-end cta-btns">
              <div className="mr-3 header-tel d-none d-sm-inline-block">
                <a href="tel:833-667-2967" className="d-nline-block">
                  <span style={{color: 'var(--main-turquoise)'}}><FaPhoneAlt /></span>&nbsp; 1-833-NO-RAZOR
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
