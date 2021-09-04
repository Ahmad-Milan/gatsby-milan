function updateMenuExpansion(menu, menuItem) {
  if(menuItem.expanded === true) {
    menuItem.expanded = false
    // also close all its subMenu items if any is exapnded
    menuItem.subMenu.forEach(item => {
      if(item.expanded === true) item.expanded = false
    })
  }else {
    menu.forEach(menuItem => {
      if(menuItem.expanded === true) {
        menuItem.expanded = false
        // also close all its subMenu items if any is exapnded
        menuItem.subMenu.forEach(item => {
          if(item.expanded === true) item.expanded = false
        })
      } 
    })
    menuItem.expanded = true
    console.log(menu)
  }
}

export default updateMenuExpansion
