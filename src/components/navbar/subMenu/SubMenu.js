import React, {useState} from 'react'
import Link  from "../../../templates/linkTesting"
import SubSubMenu from './subSubMenu/SubSubMenu'

import { FaCaretDown } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';

function SubMenu({menu, menuItem, navbarSize, expanded, index}) {
  console.log('SubMenu Rendered')
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
            <Link to={subMenuItem.url}>{subMenuItem.link} </Link>
            {
              subMenuItem?.subSubMenu &&
              <>
              <span className="caret__icon caret__icon--right" onClick={() => handleClick(subMenuItem)}>
                {navbarSize === 'navbar__menu--lg' ? <FaCaretRight /> : <FaCaretDown />}
              </span>

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
