function isExpanded(menu, subMenuItem, index) {
  
  if(subMenuItem.expanded === true) {
    subMenuItem.expanded = false
  }else {
    menu[index].subMenu.forEach(item => {
      item.expanded = false
    })
    subMenuItem.expanded = true
  }
}

export default isExpanded
