import React, {useState} from 'react'
import { Link } from "gatsby"
import SubMenu from './subMenu/SubMenu'
import { FaCaretDown } from 'react-icons/fa';

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
          <Link to={menuItem.url} className="text-uppercase">{menuItem.link}</Link>
          { menuItem?.subMenu && 
          <span className="caret__icon caret__icon--down" onClick={() => handleClick(menuItem)}>
            <FaCaretDown />
          </span> 
          }
        </div>
        {
          menuItem?.subMenu && 
          <>
            {/* menuItem ex: Sepcials -> subMenuItems : {This Month's Specials, Payment Plan} */}
            <SubMenu menu={menu} menuItem={menuItem} navbarSize={navbarSize} expanded={menuItem.expanded} index={i}/> {/* Returns <ul></ul> */}
          </>
        }
      </li>
      )
    )}
    </ul>
  )
}

export default Navbar
