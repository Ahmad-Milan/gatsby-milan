function updateMenuExpansion(menu, menuItem) {
  if(menuItem.expanded === true) {
    menuItem.expanded = false
    // also close all its subMenu items if any is exapnded
    menuItem.subMenu.forEach(item => {
      if(item.expanded === true) item.expanded = false
    })
  }else {
    // if it's not expanded
    // Close all other menu items if any is expanded and their subMenu items if any is expanded as well
    menu.forEach(menuItem => {
      if(menuItem.expanded === true) {
        menuItem.expanded = false
        // also close all its subMenu items if any is exapnded
        menuItem.subMenu.forEach(item => {
          if(item.expanded === true) item.expanded = false
        })
      } 
    })
    // Finally expand this very menuItem
    menuItem.expanded = true
  }
}

export default updateMenuExpansion
