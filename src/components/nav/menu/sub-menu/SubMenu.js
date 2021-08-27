import React from 'react'
import Link  from "../../../../templates/linkTesting"

function SubMenu({subMenuItem}) {
  return (
    <li>
      <Link to={subMenuItem.url}>{subMenuItem.link} </Link>
      {
        subMenuItem.subSubMenu &&  
        <ul>
          {subMenuItem.subSubMenu.map((item, index) => (
            <li key={index}><Link to={item.url}>{item.link}</Link></li>
          ))}
        </ul>
      }
    </li>
  )
}

export default SubMenu
