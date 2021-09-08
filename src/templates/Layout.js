import React, {useState, useEffect} from "react"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Consult2 from "../components/forms/consult/Consult2"

import "../styles/main.css";

const Layout = ({ children }) => {

  const [windowWidth, setWindowWidth] = useState(0)

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"

  // See note below **
  useEffect(() => {
    let mounted = true
    if(isBrowser && mounted) {
      window.addEventListener("resize", handleResize)
      setWindowWidth(window.innerWidth)
    }
    return () => mounted = false
  }, [isBrowser])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
      <Header windowWidth={windowWidth}/>
      {children}
      <Consult2 />
      <Footer />
    </>
  )
}

export default Layout


/** Note
Every time our effect will run, we are setting a local variable mounted to true, 
we set it to false on the cleanup function of the effect (like suggested by react). 
And most importantly, we are updating the state if and only if that value is true, 
that is if the component is un-mounted meaning our variable is set to false, it wont enter the if block.
refere to: https://www.debuggr.io/react-update-unmounted-component/
*/