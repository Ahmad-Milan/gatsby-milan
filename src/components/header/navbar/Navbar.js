import React, {useState} from 'react'
import Link  from "../../../functions/general/linkTesting"
import SubMenu from './subMenu/SubMenu'
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa'
import updateMenuExpansion from './updateMenuExpansion'

function Navbar({ menu, navbarSize, isOpen, closeMenu }) {

  const [clicked, setClicked] = useState(false)

  const handleClick = (menuItem) => {
    updateMenuExpansion(menu, menuItem)
    // this will trigger this component to rerender
    setClicked(!clicked)
  }

  return (
    <ul className={`navbar__menu ${navbarSize} ${isOpen}`}>
      {
        navbarSize === 'navbar__menu--sm' && 
        <li className="menu__item" onClick={closeMenu}>
          <div className="pb-1 pe-4 text-end close_menu_icon">
            <span><FaTimes /></span>
          </div>
        </li>
      }

    {menu.map((menuItem, i) =>  (
      <li key={i} className="menu__item">
        <div className="menu__item__link__wrapper">
          {/*👇 Main menu links go here */}
          {/* Home / Specials / The Process / Areas / Contact & About Us  */}
          <Link
            to={menuItem.url} 
            activeClassName="active-link" 
            className="text-uppercase"
            onClick={closeMenu}
            >
              {menuItem.link}
          </Link>
          { menuItem?.subMenu && 
          <>
            {
              navbarSize === 'navbar__menu--lg' && 
              <span className="caret__icon caret__icon--down"><FaCaretDown /></span>
            }
            {
              navbarSize === 'navbar__menu--sm' && 
              <span className="caret__icon" onClick={() => handleClick(menuItem)}>
                { menuItem.expanded ? <FaCaretUp /> : <FaCaretDown /> }
              </span> 
            }
          </>
          }
        </div>
        {
          menuItem?.subMenu && 
          <>
            {/* menuItem ex: Sepcials -> subMenuItems : {This Month's Specials, Payment Plan} */} {/* Returns <ul></ul> */}
            <SubMenu 
              menu={menu} menuItem={menuItem}
              navbarSize={navbarSize} index={i}
              expanded={menuItem.expanded} 
              closeMenu={closeMenu}/>
          </>
        }
      </li>
      )
    )}
    </ul>
  )
}

export default Navbar
