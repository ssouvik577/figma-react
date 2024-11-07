import React from 'react'
import logo from "../../assets/images/onetaag_logo 1.png"

function Logo({height,width}) {
  return (
    <div>
        <img src={logo} alt="logo" style={{ height: `${height}px`, width: `${width}px` }} />
    </div>
  )
}

export default Logo