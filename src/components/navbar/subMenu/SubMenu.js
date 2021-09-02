import React, {useState} from 'react'
import Link  from "../../../templates/linkTesting"
import SubSubMenu from './subSubMenu/SubSubMenu'

import { FaCaretRight, FaCaretDown, FaCaretUp } from 'react-icons/fa';

function SubMenu({menu, menuItem, navbarSize, expanded, index}) {

  const [clicked, setClicked] = useState(false)

  const handleClick = (subMenuItem) => {
    if(subMenuItem.expanded === true) {
      subMenuItem.expanded = false
    }else {
      menu[index].subMenu.forEach(item => {
        item.expanded = false
      })
      subMenuItem.expanded = true
    }
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
            <Link activeClassName="active-link" to={subMenuItem.url}>{subMenuItem.link} </Link>
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
