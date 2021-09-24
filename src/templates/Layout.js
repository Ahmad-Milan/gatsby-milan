import React from "react"
import Header from "../components/header/Header"
import Consult from '../components/forms/consult/Consult'
import Footer from "../components/footer/Footer"
import getSiteData from "../functions/general/getSiteData"
import useResize from "../hooks/useResize"
import "../styles/main.css"

const siteData = getSiteData('Tucson', 'Arizona')

const Layout = ({ children }) => {

  const windowWidth = useResize()

  return (
    <>
      <Header siteData={siteData} windowWidth={windowWidth}/>
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