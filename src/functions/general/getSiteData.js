import setSiteData from './setSiteData'

export const MILAN_PHONE = '833-667-2967'
export const NO_RAZOR = '1-833-NO-RAZOR'

const siteData = setSiteData('Houston', 'Texas')

function getSiteData() { return siteData }

export default getSiteData
