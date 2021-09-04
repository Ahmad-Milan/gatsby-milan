function updateSubMenuExpansion(menu, subMenuItem, index) {
  // Close subMenuItem if expanded
  if(subMenuItem.expanded === true) {
    subMenuItem.expanded = false
  }else {
    // if not expanded, 
    // first, close all other expanded subMenu items of this very menu item
    menu[index].subMenu.forEach(item => {
      if(item.expanded === true) item.expanded = false
    })
    // then, expand this subMenu item
    subMenuItem.expanded = true
  }
}

export default updateSubMenuExpansion
