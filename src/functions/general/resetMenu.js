function resetMenu(menu) {
  menu.forEach(item => {
    if(item.subMenu) {
      // add expanded prop and set it to false initially
      item.expanded = false
      item.subMenu.forEach(item => {
        // add expanded prop and set it to false initially
        if(item.subSubMenu) {
          item.expanded = false
        }
      })
    }
  })
}

export default resetMenu
