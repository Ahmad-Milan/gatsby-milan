import React, {useState} from 'react'
import { Link } from "gatsby"

import Menu from '../nav/menu/Menu'

import { FaPhoneAlt } from 'react-icons/fa';

import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="shadow-sm">
      <div className="container-xl">
        <div className="row">
          <nav className="w-100">
            <button id="menu-btn" className="d-inline-block d-lg-none" type="button"
              onClick={handleClick}>MENU</button>
            {/* Main menu list */}
            <Menu passedClass="navbar__menu--lg" /> {/* for larger screens */}
            
            <Menu passedClass={`navbar__menu--sm ${isOpen ? 'isOpen' : '' }`} /> {/* for smaller screens */}

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
