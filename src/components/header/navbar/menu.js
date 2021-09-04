import MenuList from '../../../data/menuList.json'

function getMenu() {
  const menu = MenuList.content
  menu.forEach(item => {
    if(item.subMenu) {
      item.expanded = false
      item.subMenu.forEach(item => {
        if(item.subSubMenu) {
          item.expanded = false
        }
      })
    }
  })

  return menu
}

export default getMenu
