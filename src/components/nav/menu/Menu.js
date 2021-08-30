import React, {useState, useRef, useEffect} from 'react'
import { Link } from "gatsby"
import SubMenu from './sub-menu/SubMenu'
import { FaCaretDown } from 'react-icons/fa';

import MenuList from '../../../data/menuList.json'
import './Menu.css'

function Menu({ navbarSize, isOpen }) {
  const menu = MenuList.content

  const [currentExpandedId, setCurrentExpandedId] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const prevId = useRef(0)

  useEffect(() => {
    prevId.current = currentExpandedId
  }, [currentExpandedId])

  const handleClick = (id) => {
    if(prevId.current === id) {
      setIsExpanded(!isExpanded)
    }else {
      setCurrentExpandedId(id)
      setIsExpanded(true)
    }
  }

  return (
    <ul className={`navbar__menu ${navbarSize} ${isOpen}`}>

    {menu.map((item, i) =>  (
      <li key={i} className="menu__item">
        <div className="menu__item__link__wrapper">
          {/*👇 Main menu links go here */}
          <Link to={item.url} className="text-uppercase">{item.link}</Link>
          { item?.subMenu && 
          <span className="caret__icon caret__icon--down" 
            onClick={() => handleClick(i+1)} role="button" tabIndex={i}>
            <FaCaretDown />
          </span> 
          }
        </div>

        <div className="subMenu__wrapper">
          { /* subMenu goes here 👇 if any  */
            item?.subMenu && 
            <ul className={`subMenu shadow ${ (i + 1) === currentExpandedId && isExpanded ? 'expanded' : '' }`}>
              {
                item.subMenu.map((subMenuItem, index) => (
                  <SubMenu key={index} subMenuItem={subMenuItem} navbarSize={navbarSize}/>
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
