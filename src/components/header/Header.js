import React, {useState} from 'react'
import { Link } from "gatsby"
import getMenu from './navbar/menu'
import Navbar from './navbar/Navbar'
import useClickOutside from '../../hooks/clickOutside'
import { FaPhoneAlt } from 'react-icons/fa';
import './Header.css'


function Header({windowWidth}) {
  const menu = getMenu()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)

  const domNode = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <header ref={domNode} className="shadow-sm">
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

            <div className="float-end cta-btns" onClick={handleClick}>
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

