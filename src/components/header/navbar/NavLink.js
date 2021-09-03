import React from 'react'
import { Link } from 'gatsby'

function Navlink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "var(--main-turquoise)" : "#fff"
          }
        };
      }}
    />
  )
}

export default Navlink
