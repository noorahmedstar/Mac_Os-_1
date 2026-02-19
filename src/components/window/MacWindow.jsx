import React, { children } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children ,height="55vh",
        width="40vw", windowName,windowState,setWindowState}) => {
  return (
    <Rnd
      bounds="parent"
      default={{
        height: height,
        width: width,
        x: 300,
        y: 100
      }}>
      <div className="window">
        <div className="nav">
          <div className="mainBox">
            <div onClick={()=> setWindowState(state => ({...state, [windowName]:false}))} className="box red"></div>
            <div className="box yellow"></div>
            <div className="box green"></div>
          </div>
          <div className="title">noorahmed -admin</div>
        </div>
        <div className="main">{children}</div>
      </div>

    </Rnd>
  )
}

export default MacWindow

