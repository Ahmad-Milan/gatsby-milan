import React from "react"
import Header from "../components/header/Header"
import Consult from '../components/forms/consult/Consult'
import Footer from "../components/footer/Footer"
import siteDataM from "../data/siteDataM.json"
import siteDataS from "../data/siteDataS.json"
import useResize from "../hooks/useResize"

import "../styles/main.css";

const Layout = ({ children }) => {

  const windowWidth = useResize()

  return (
    <>
      <Header windowWidth={windowWidth}/>
      {children}
      <span id="scrollToConsult"></span>
      <Consult siteData={siteDataS} />
      <div className="p-5 m-5"></div>
      <div className="p-5 m-5"></div>
      <Footer />
    </>
  )
}

export default Layout