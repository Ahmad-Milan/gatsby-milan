import React, {useState} from 'react'
import resetMenu from '../../utils/helpers/general/resetMenu'
import Navbar from './navbar/Navbar'
import useClickOutside from '../../hooks/useClickOutside'
import { FaPhoneAlt } from 'react-icons/fa'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './Header.css'

function Header({menu, siteData}) {
  resetMenu(menu)
  const [isOpen, setIsOpen] = useState(false)
  // Close/Open the main menu
  const handleClick = () => setIsOpen(!isOpen)
  // Close main menu when click outside the Header component
  const domNode = useClickOutside(() => setIsOpen(false))

  const breakpoints = useBreakpoint()

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
            <Navbar siteData={siteData} menu={menu} closeMenu={() => setIsOpen(false)}
              navbarSize={`${breakpoints.md ? 'navbar__menu--sm' : 'navbar__menu--lg'}`}
              isOpen={isOpen ? 'isOpen' : ''}/>

            <div className="float-end cta-btns" onClick={() => setIsOpen(false)}>
              <div className="me-3 header-tel d-none d-sm-inline-block">
                <a href="tel:833-667-2967">
                  <i><FaPhoneAlt /></i><span className="ps-2">1-833-NO-RAZOR</span>
                </a>
              </div>
              <div className="d-inline-block">
                <button className="cta-btn red-bg-btn py-1 px-3" onClick={() => scrollTo('#consultation')}>
                  {siteData.open ? 'FREE CONSULT' : 'Request More Information'}
                </button>
              </div>
					  </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

