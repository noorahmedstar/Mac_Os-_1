import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss";

const Spotify = ({windowName,windowState,setWindowState}) => {
    return (
         <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} width="25vw">
            <div className="resume">


                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWY64wDtewQt?utm_source=generator&theme=0" ></iframe>
            </div>

        </MacWindow>
    )
}

export default Spotify
