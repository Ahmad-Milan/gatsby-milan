import {useRef, useEffect} from 'react'

function useClickOutside(handler) {
  const domNodeRef = useRef(null)
  useEffect(() => {
    const eventHandler = (event) => {
      if(domNodeRef.current && !domNodeRef.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", eventHandler)

    return () => {
      document.removeEventListener("mousedown", eventHandler)
    }
  })
  return domNodeRef
}

export default useClickOutside
