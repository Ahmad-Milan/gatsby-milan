import React from "react"
import Multiple from "./Multiple"
import Single from "./Single"
import NotOpen from "./NotOpen"

function Consult({siteData}) {
  if(siteData.multiple && siteData.open) return <Multiple siteData={siteData} />
  else if(!siteData.multiple && siteData.open) return <Single siteData={siteData} />
  else return <NotOpen siteData={siteData} />
}
export default Consult
