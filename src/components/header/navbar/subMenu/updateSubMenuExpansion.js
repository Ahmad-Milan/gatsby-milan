function updateSubMenuExpansion(menu, subMenuItem, index) {
  if(subMenuItem.expanded === true) {
    subMenuItem.expanded = false
  }else {
    menu[index].subMenu.forEach(item => {
      if(item.expanded === true) item.expanded = false
    })
    subMenuItem.expanded = true
  }
}

export default updateSubMenuExpansion
