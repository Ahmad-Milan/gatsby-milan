exports.createPages = ({ actions: { createPage } }) => {
  const siteData = require("./src/data/siteData.json")
  // Create a page for city
  createPage({
    path: `/locations/${siteData.city.trim().replace(/\s/g, '').toLowerCase()}/`,
    component: require.resolve("./src/components/templates/city-template.js"),
    context: { siteData },
  })

  // if the city has multiple locations
  if(siteData.locations.length > 1) {
    // Create a page for each store.
    siteData.locations.forEach((store) => {
      createPage({
        path: `/locations/${siteData.city.trim().replace(/\s/g, '').toLowerCase()}/${store.location.trim().toLowerCase().replace(/\s/g, '')}/`,
        component: require.resolve("./src/components/templates/store-template.js"),
        context: { store },
      })
    })
  }
}