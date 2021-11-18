import MenuList from '../../data/menuList.json'
import { FACEBOOK_URL_START } from '../../constants/constants'
import trimAll from './trimAll'

// Pass in the generated siteData & city objects and create a menu list for the curretn city to be used in the navbar
function createMenu(siteData) {

  const menu = MenuList.content

  menu.forEach(item => {

    if(item.link === 'Locations') {
      // Get index of 'Facebook' subMenu item
      let f = item.subMenu.findIndex(elem => elem.link === "Facebook")
      // Get index of 'About Us' subMenu item
      let ab = item.subMenu.findIndex(elem => elem.link === "About Us")

      let city_pathname = `${trimAll(siteData.cityName)}`

      item.subMenu[0].link = `${siteData.cityName} Location${siteData.multiple ? 's' : ''}`
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
            "pathname": `${FACEBOOK_URL_START}${store.platforms.facebook}`
          })
        })
        item.subMenu[0].subSubMenu = locations
        item.subMenu[f].subSubMenu = facebook
      }
      // if the current city is a single location city
      // Update the facebook pathname value
      if(!siteData.multiple) {
        item.subMenu[f].pathname = FACEBOOK_URL_START+siteData.locations[0].platforms.facebook
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
