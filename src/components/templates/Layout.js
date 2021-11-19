import React from "react"
import Header from "../header/Header"
import Consult from '../forms/consult/Consult'
import Footer from "../footer/Footer"
import getSiteData from "../../utils/helpers/general/getSiteData"
import createMenu from '../../utils/helpers/general/createMenu'
import "../../styles/main.css"

export const siteData = getSiteData()

const menu = createMenu(siteData)

function Layout({ children }) {

  return (
    <>
      <Header menu={menu} siteData={siteData}/>
      {children}
      <span id="consultation"></span>
      <Consult siteData={siteData} />
      <div className="p-5 m-5"></div>
      <div className="p-5 m-5"></div>
      <Footer />
    </>
  )
}

export default Layout