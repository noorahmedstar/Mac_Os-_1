import React from 'react'
import "./nav.scss"
import Ok from "./date.jsx"



const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="icon BOX"><img src="src/assets/apple-logo-svgrepo-com.svg" alt="" /></div>
        <div className="name BOX">Noor Ahmed</div>
        <div className="text BOX">file</div>
        <div className="text BOX">window</div>
        <div className="text BOX">terminal</div>


      </div>
      <div className="right">
        <div className="icon" id="b"><img src="src/assets/wifi.svg" alt="" /></div>
        <Ok/>
      </div>
    </nav>
  )
}

export default Nav
