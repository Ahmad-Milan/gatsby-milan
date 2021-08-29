import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"



import "../styles/main.css";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default Layout

