import React, {useState} from 'react'
import { Link } from "gatsby"
import SubMenu from './sub-menu/SubMenu'
import { FaCaretDown } from 'react-icons/fa';

import MenuList from '../../../data/menuList.json'
import './Menu.css'

function Menu({ passedClass }) {
  const menu = MenuList.content

  const [currentExpanded, setCurrentExpanded] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = (id) => {
    setIsExpanded(!isExpanded)
    setCurrentExpanded(id)
  }
  console.log(currentExpanded)
  return (
    <ul className={`navbar__menu ${passedClass}`}>

      <li className="menu__item position-relative">
        <div className="menu__item__link__wrapper">
          <Link to="/">HOME</Link>
        </div>
      </li>

    {menu.map((item, i) =>  (
      <li key={i} className="menu__item position-relative">

        <div className="menu__item__link__wrapper">
          {/*👇 Main menu links go here */}
          <Link to={item.url} className="text-uppercase">{item.link}</Link>
          { item?.subMenu && 
          <span className="caret__icon caret__icon--down" onClick={() => handleClick(i+1)} role="button" tabIndex={i}>
            <FaCaretDown />
          </span> 
          }
        </div>

        <div className="subMenu__wrapper">
          { /* subMenu goes here 👇 if any  */
            item?.subMenu && 
            <ul className={`subMenu shadow ${ (i + 1) === currentExpanded && isExpanded ? 'expanded' : '' }`}>
              {
                item.subMenu.map((subMenuItem, index) => (
                  <SubMenu key={index} subMenuItem={subMenuItem}/>
                ))
              }
            </ul> 
          }
        </div>

      </li>
      )
    )}
    </ul>
  )
}

export default Menu
