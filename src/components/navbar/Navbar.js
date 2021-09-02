import React, {useState} from 'react'
import Navlink from './Navlink';
import SubMenu from './subMenu/SubMenu'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';



function Navbar({ menu, navbarSize, isOpen }) {
console.log('Navbar Rendered')
  const [clicked, setClicked] = useState(false)

  const handleClick = (menuItem) => {
    if(menuItem.expanded === true) {
      menuItem.expanded = false
    }else {
      menu.forEach(item => {
        item.expanded = false
      })
      menuItem.expanded = true
    }
    setClicked(!clicked)
  }

  return (
    <ul className={`navbar__menu ${navbarSize} ${isOpen}`}>

    {menu.map((menuItem, i) =>  (
      <li key={i} className="menu__item">
        <div className="menu__item__link__wrapper">
          {/*👇 Main menu links go here */}
          {/* Home / Specials / The Process / Areas / Contact & About Us  */}
          <Navlink to={menuItem.url} className="text-uppercase">{menuItem.link}</Navlink>
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
            <SubMenu menu={menu} menuItem={menuItem} navbarSize={navbarSize} expanded={menuItem.expanded} index={i}/>
          </>
        }
      </li>
      )
    )}
    </ul>
  )
}

export default Navbar
