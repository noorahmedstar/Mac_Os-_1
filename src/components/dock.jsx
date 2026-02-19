import React from 'react'
import "./dock.scss"

import githubIcon from "../assets/github.svg";
import noteIcon from "../assets/note.svg";
import pdfIcon from "../assets/pdf.svg";
import spotifyIcon from "../assets/spotify-2.svg";
import wikiIcon from "../assets/wiki.svg";
import terminalIcon from "../assets/windows-terminal.svg";

const Dock = ({ setWindowState }) => {

  const openWindow = (name) => {
    setWindowState(prev => ({
      ...prev,
      [name]: true
    }))
  }

  return (
    <footer className='dock'>

      <div onClick={() => openWindow("Github")} className="icon">
        <img src={githubIcon} alt="github" />
      </div>

      <div onClick={() => openWindow("Note")} className="icon">
        <img src={noteIcon} alt="note" />
      </div>

      <div onClick={() => openWindow("Pdf")} className="icon">
        <img src={pdfIcon} alt="pdf" />
      </div>

      <div onClick={() => openWindow("Spotify")} className="icon">
        <img src={spotifyIcon} alt="spotify" />
      </div>

      <div onClick={() => openWindow("Youtube")} className="icon">
        <img src={wikiIcon} alt="wiki" />
      </div>

      <div onClick={() => openWindow("MyTerminal")} className="icon">
        <img src={terminalIcon} alt="terminal" />
      </div>

    </footer>
  )
}

export default Dock
