import React from "react"
import Header from "../components/header/Header"
import Consult from '../components/forms/consult/Consult'
import Footer from "../components/footer/Footer"
import siteData from "../data/siteData.json"
import useResize from "../hooks/useResize"
import isMultiple from "../functions/general/isMultiple"
import "../styles/main.css"

// Check if the site has multiple locations & if Open
isMultiple(siteData)

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