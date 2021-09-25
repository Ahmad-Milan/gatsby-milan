import MenuList from '../../../data/menuList.json'
import getCity from '../../../functions/general/getCity'

// Pass in the generated siteData obj and create a menu list for the curretn city to be used in the navbar
function getMenu(siteData) {

  const city = getCity(siteData)
  const menu = MenuList.content

  menu.forEach(item => {
    if(item.subMenu) {
      // add expanded prop and set it to false initially
      item.expanded = false

      item.subMenu.forEach(item => {
        // if the current city is a multiple locations city
        if(siteData.multiple) {
          if(item.link === 'Our Location') {
            item.link = 'Our Locations'
            item.pathname = '/locations/'
            let locations = []
            city.locations.forEach(item => {
              locations.push({
                "link": item.location,
                "pathname": "/about-us/"+item.location.toLowerCase().replace(/\s+/g, '')
              })
            })
            // add a subSubMenu prop and assign it to the generated locations array
            item.subSubMenu = locations
          }
          if(item.link === 'Facebook') {
            let facebook = []
            city.locations.forEach(item => {
              facebook.push({
                "link": item.location,
                "pathname": item.facebook
              })
            })
            // add a subSubMenu prop and assign it to the generated facebook array
            item.subSubMenu = facebook
          }
        }
        // if the current city is a single location city
        // Update the facebook pathname value
        if(!siteData.multiple && item.link === 'Facebook') {
          item.pathname = city.locations[0].facebook
        }

        // add expanded prop and set it to false initially
        if(item.subSubMenu) {
          item.expanded = false
        }
      })
    }
  })
  return menu
}

export default getMenu
