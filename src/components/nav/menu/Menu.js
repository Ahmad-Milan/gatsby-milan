import React from 'react'
import { Link } from "gatsby"
import SubMenu from './sub-menu/SubMenu'

import MenuList from '../../../data/menuList.json'
import './Menu.css'

function Menu({ passedClass }) {
  const menu = MenuList.content

  return (
    <ul className={`navbar__menu ${passedClass}`}>
      {menu.map((item, i) =>  (
        <li key={i} className="menu__item position-relative">

          <div className="menu__item__link__wrapper">
            {/*👇 Main menu links go here */}
            <Link to={item.url} className="text-uppercase">{item.link}</Link>
          </div>

          <div className="subMenu__wrapper">
            { /* subMenu goes here 👇 if any  */
              item?.subMenu && 
              <ul className="subMenu shadow">
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
