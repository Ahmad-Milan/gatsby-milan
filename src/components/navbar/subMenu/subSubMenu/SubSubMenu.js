import React from 'react'
import Link  from "../../../../templates/linkTesting"

function SubSubMenu({subMenuItem, expanded}) {
  return (
    <div className="subSubMenu__wrapper">
      <ul className={`subSubMenu pl-0 mt-lg-2 mx-2 mx-lg-0  ${expanded ? 'subSubMenu-slidedown' : ''}`}>
        {/* SubSubMenuItems Ex: <li>Omaha Central</li> - <li>Omaha West</li>  */}
      { 
        subMenuItem.subSubMenu.map((subSubMenuItem, index) => (
          <li key={index}><Link to={subSubMenuItem.url}>{subSubMenuItem.link}</Link></li>
        ))
      }
      </ul>
    </div>
  )
}

export default SubSubMenu


// subSubMenu-slidedown 