exports.createPages = ({ actions: { createPage } }) => {
  const siteLocations = require("./src/data/site-locations.json")
  // Create a page for each location.
  siteLocations.locations.forEach((store) => {
    createPage({
      path: `/locations/${siteLocations.city.trim().replace(/\s/g, '').toLowerCase()}/${store.location.trim().toLowerCase().replace(/\s/g, '')}/`,
      component: require.resolve("./src/components/layout/template.js"),
      context: { store },
    })
  })
}