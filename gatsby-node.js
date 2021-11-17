exports.createPages = ({ actions: { createPage } }) => {
  const siteData = require("./src/data/siteData.json")
  const trimAll = str => str.trim().toLowerCase().replace(/\s+/g, '')
  // Create a page for city
  createPage({
    path: `/locations/${trimAll(siteData.cityName)}/`,
    component: require.resolve("./src/components/templates/city-template.js"),
    context: { siteData },
  })

  // if the city has multiple locations
  if(siteData.locations.length > 1) {
    // Create a page for each store.
    siteData.locations.forEach((store) => {
      createPage({
        path: `/locations/${trimAll(siteData.cityName)}/${trimAll(store.location)}/`,
        component: require.resolve("./src/components/templates/store-template.js"),
        context: { store },
      })
    })
  }
}