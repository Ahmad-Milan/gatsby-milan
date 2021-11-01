import setSiteData from './setSiteData'
import siteLocations from '../../data/site-locations.json' 

const siteData = setSiteData(siteLocations.pathname, siteLocations.stateShort)

function getSiteData() { return siteData }

export default getSiteData
