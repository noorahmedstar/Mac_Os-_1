import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss";

const Youtube = ({windowName,windowState,setWindowState}) => {
    return (
         <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
            <div className="resume">


                <iframe src="https://en.wikipedia.org/" ></iframe>
            </div>

        </MacWindow>
    )
}

export default Youtube
