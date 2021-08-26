import React, {useState} from "react"
import Navbar from "../components/nav/navbar/Navbar"
import Sidebar from "../components/nav/sidebar/Sidebar"
import Footer from "../components/footer/Footer"

import "../styles/main.css";


const Layout = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const handleToggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
    <Navbar />
    {children}
    <Footer />

      {/* <Navbar toggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={handleToggleSidebar} />
      {children}
      <Footer /> */}
      
    </>
  )
}

export default Layout