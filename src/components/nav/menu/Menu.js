import React from 'react'
import { Link } from "gatsby"
import SubMenu from './sub-menu/SubMenu'

import MenuList from '../../../data/menuList.json'

function Menu() {
  const menu = MenuList.content

  return (
    <ul>
      {menu.map((item, i) =>  (
        <li key={i}>
          {/*👇 Main links go here */}
          <Link to={item.url}>{item.link}</Link>
          {/* subMenu goes here 👇 if any  */}
          {item?.subMenu && 
            <ul>
              {
                item.subMenu.map((subMenuItem, index) => (
                  <SubMenu key={index} subMenuItem={subMenuItem}/>
                ))
              }
            </ul> 
          }
        </li>
        )
      )}
    </ul>
  )
}

export default Menu
