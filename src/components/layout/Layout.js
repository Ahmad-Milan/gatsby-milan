import React from "react"
import Header from "../header/Header"
import Consult from '../forms/consult/Consult'
import Footer from "../footer/Footer"
import getSiteData from "../../functions/general/getSiteData"
import useResize from "../../hooks/useResize"
import createMenu from '../../functions/general/createMenu'
import getCity from '../../functions/general/getCity'
import "../../styles/main.css"

export const siteData = getSiteData()
export const city = getCity(siteData)
const menu = createMenu(siteData, city)

function Layout({ children }) {

  const windowWidth = useResize()

  return (
    <>
      <Header menu={menu} siteData={siteData} windowWidth={windowWidth}/>
      {children}
      <span id="scrollToConsult"></span>
      <Consult siteData={siteData} />
      <div className="p-5 m-5"></div>
      <div className="p-5 m-5"></div>
      <Footer />
    </>
  )
}

export default Layout