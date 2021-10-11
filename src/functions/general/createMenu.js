import MenuList from '../../data/menuList.json'

// Pass in the generated siteData & city objects and create a menu list for the curretn city to be used in the navbar
function createMenu(siteData, city) {

  const menu = MenuList.content

  menu.forEach(item => {

    if(item.link === 'Locations') {
      // Get index of 'City's Loctation' subMenu item
      let l = item.subMenu.findIndex(elem => elem.link.includes("'s Location"))
      // Get index of 'Facebook' subMenu item
      let f = item.subMenu.findIndex(elem => elem.link === "Facebook")
      // Get index of 'About Us' subMenu item
      let ab = item.subMenu.findIndex(elem => elem.link === "About Us")

      let city_pathname = `${siteData.city.trim().toLowerCase().replace(/\s/g, '')}`

      item.subMenu[l].link = `${siteData.city}'s Location${siteData.multiple ? 's' : ''}`
      item.subMenu[l].pathname = `/locations/${city_pathname}/`
      item.subMenu[ab].pathname = `/locations/${city_pathname}/#about-us`
      // if the current city is a multiple locations city
      if(siteData.multiple) {
        let locations = []
        let facebook = []
        city.locations.forEach(elem => {
          elem.pathname = elem.location.trim().toLowerCase().replace(/\s+/g, '')
          locations.push({
            "link": elem.location,
            "pathname": `/locations/${city_pathname}/${elem.pathname}/`
          })
          facebook.push({
            "link": elem.location,
            "pathname": elem.facebook
          })
        })

        item.subMenu[l].subSubMenu = locations
        item.subMenu[f].subSubMenu = facebook
      }
      // if the current city is a single location city
      // Update the facebook pathname value
      if(!siteData.multiple) {
        item.subMenu[f].pathname = city.locations[0].facebook
      }
    }

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
  return menu
}

export default createMenu
