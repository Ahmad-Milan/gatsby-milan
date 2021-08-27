import React from 'react'
import Link  from "../../../../templates/linkTesting"

function SubMenu({subMenuItem}) {
  return (
    <li>
      <Link to={subMenuItem.url}>{subMenuItem.link} </Link>
      { /* subSubMenu list goes here 👇 if any */
        subMenuItem.subSubMenu &&  
        <div className="subSubMenu__wrapper">
          <ul className="subSubMenu pl-0 mt-lg-2 mx-2 mx-lg-0">
            { 
              subMenuItem.subSubMenu.map((item, index) => (
                <li key={index}><Link to={item.url}>{item.link}</Link></li>
              ))
            }
          </ul>
        </div>
      }
    </li>
  )
}

export default SubMenu
