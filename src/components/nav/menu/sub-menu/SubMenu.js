import React, {useRef, useState, useEffect} from 'react'
import Link  from "../../../../templates/linkTesting"
import { FaCaretRight } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

function SubMenu({subMenuItem, navbarSize, closeAllExpandedLists}) {
  // const caretRef = useRef()

  // const [currentExpandedIndex, setCurrentExpandedIndex] = useState(null)
  // const [expanded, setExpanded] = useState(false)

  // const prevIndex = useRef(null)

  // useEffect(() => {
  //   prevIndex.current = currentExpandedIndex
  // }, [currentExpandedIndex])

  // const handleClick = (index) => {
  //   if(prevIndex.current === index) {
  //     console.log('same')
  //     setExpanded(!expanded)
  //   }else {
  //     setCurrentExpandedIndex(index)
  //     setExpanded(true)
  //   }
  // }

  const [expanded, setExpanded] = useState(null)

  // const handleClick = () => {
  //   parentHandleClick(true)
  //   subMenuItem.expanded = true
  //   setExpanded(subMenuItem.expanded)
  // }

  useEffect(() => {
    subMenuItem.expanded = expanded
  }, [subMenuItem.expanded]) 

  const handleClick = () => {
    // setExpanded(subMenuItem.expanded)
    if(subMenuItem.expanded === true) {
      console.log('if')
      closeAllExpandedLists()
      setExpanded(subMenuItem.expanded)
    } else {
      console.log('else')
      closeAllExpandedLists()
      subMenuItem.expanded = true
      setExpanded(subMenuItem.expanded)
    }
  }
  
  return (
    <li>
      <Link to={subMenuItem.url}>{subMenuItem.link} </Link>
      { /* subSubMenu list goes here 👇 if any */
        subMenuItem.subSubMenu && 
        <>
          <span className="caret__icon caret__icon--right" onClick={handleClick}>
            {navbarSize === 'navbar__menu--lg' ? <FaCaretRight /> : <FaCaretDown />}
          </span>
          <div className="subSubMenu__wrapper">
            
            <ul className={`
              subSubMenu pl-0 mt-lg-2 mx-2 mx-lg-0 
              ${expanded ? 'subSubMenu-slidedown' : ''}
              `}>
              { 
                subMenuItem.subSubMenu.map((item, index) => (
                  <li key={index}><Link to={item.url}>{item.link}</Link></li>
                ))
              }
            </ul>
          </div>
        </>
      }
    </li>
  )
}

export default SubMenu
