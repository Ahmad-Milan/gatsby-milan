function isExpanded(menu, menuItem) {
  if(menuItem.expanded === true) {
    menuItem.expanded = false
  }else {
    menu.forEach(item => {
      item.expanded = false
    })
    menuItem.expanded = true
  }
}

export default isExpanded
