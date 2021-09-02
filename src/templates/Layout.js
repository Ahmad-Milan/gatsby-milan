import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import { useLocation, useHistory } from '@reach/router';


import "../styles/main.css";

const Layout = ({ children }) => {

  const location = useLocation()
  return (
    <>
      <Header location={location} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

