import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss";

const Pdf = ({windowName,windowState,setWindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
   <div className="resume">
 <iframe src="/study.pdf" title="pdf-viewer"></iframe>


   </div>
       
   </MacWindow>
  )
}

export default Pdf
