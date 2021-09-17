import {useState, useEffect} from "react"

const useResize = () => {
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
  
  return windowWidth
}

export default useResize