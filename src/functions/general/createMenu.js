import MenuList from '../../data/menuList.json'
import { facebook_start } from '../../constants/constants'

// Pass in the generated siteData & city objects and create a menu list for the curretn city to be used in the navbar
function createMenu(siteData) {

  const menu = MenuList.content

  menu.forEach(item => {

    if(item.link === 'Locations') {
      // Get index of 'Facebook' subMenu item
      let f = item.subMenu.findIndex(elem => elem.link === "Facebook")
      // Get index of 'About Us' subMenu item
      let ab = item.subMenu.findIndex(elem => elem.link === "About Us")

      let city_pathname = `${siteData.city.trim().toLowerCase().replace(/\s/g, '')}`

      item.subMenu[0].link = `${siteData.city} Location${siteData.multiple ? 's' : ''}`
      item.subMenu[0].pathname = `/locations/${city_pathname}/`
      item.subMenu[ab].pathname = `/locations/${city_pathname}/#about-us`
      // if the current city is a multiple locations city
      if(siteData.multiple) {
        let locations = []
        let facebook = []
        siteData.locations.forEach(store => {
          locations.push({
            "link": store.location,
            "pathname": `/locations/${city_pathname}/${store.pathname}/`
          })
          facebook.push({
            "link": store.location,
            "pathname": `${facebook_start}${store.reviews.facebook}`
          })
        })
        item.subMenu[0].subSubMenu = locations
        item.subMenu[f].subSubMenu = facebook
      }
      // if the current city is a single location city
      // Update the facebook pathname value
      if(!siteData.multiple) {
        item.subMenu[f].pathname = facebook_start+siteData.locations[0].reviews.facebook
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
