exports.createPages = ({ actions: { createPage } }) => {
  const siteLocations = require("./src/data/site-locations.json")
  // Create a page for city
  createPage({
    path: `/locations/${siteLocations.city.trim().replace(/\s/g, '').toLowerCase()}/`,
    component: require.resolve("./src/components/templates/city-template.js"),
    context: { siteLocations },
  })

  // if the city has multiple locations
  if(siteLocations.locations.length > 1) {
    // Create a page for each store.
    siteLocations.locations.forEach((store) => {
      createPage({
        path: `/locations/${siteLocations.city.trim().replace(/\s/g, '').toLowerCase()}/${store.location.trim().toLowerCase().replace(/\s/g, '')}/`,
        component: require.resolve("./src/components/templates/store-template.js"),
        context: { store },
      })
    })
  }
}