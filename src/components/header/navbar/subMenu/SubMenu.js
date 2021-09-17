import React, {useState} from 'react'
import Link  from "../../../../functions/general/linkTesting"
import SubSubMenu from './subSubMenu/SubSubMenu'

import { FaCaretRight, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import updateSubMenuExpansion from './updateSubMenuExpansion';

function SubMenu({menu, menuItem, navbarSize, expanded, index, closeMenu}) {

  const [clicked, setClicked] = useState(false)

  const handleClick = (subMenuItem) => {
    updateSubMenuExpansion(menu, subMenuItem, index)
    // this will trigger this component to rerender
    setClicked(!clicked)
  }

  return (
    <div className="subMenu__wrapper">
    { /* menuItem ex: Contact & About Us -> subMenuItems : {Our Locations, Facebook, ...etc} */
      menuItem?.subMenu && 
      <ul className={`subMenu shadow ${expanded ? 'expanded' : ''}`}> 
        {
        menuItem.subMenu.map((subMenuItem, x) => {
          return (
          <li key={x}> {/* Ex: <li>Our Locations</li> */}
            <Link to={subMenuItem.url} onClick={closeMenu}>{subMenuItem.link} </Link>
            {
              subMenuItem?.subSubMenu &&
              <>
              {
                navbarSize === 'navbar__menu--lg' && 
                <span className="caret__icon caret__icon--right"><FaCaretRight /></span>
              }
              {
                navbarSize === 'navbar__menu--sm' &&
                <span className="caret__icon" onClick={() => handleClick(subMenuItem)}>
                  { subMenuItem.expanded ? <FaCaretUp />  : <FaCaretDown />  }
                </span>
              }

              {/* Ex: <li>Omaha Central</li> - <li>Omaha West</li>  */}
              <SubSubMenu subMenuItem={subMenuItem} expanded={subMenuItem.expanded} />
              
              </>
            }
          </li>
          )
        })
        }        
      </ul> 
    }
  </div>
  )
}

export default SubMenu
