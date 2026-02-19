import React from 'react'
import "./dock.scss"

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
        <img src="src/assets/github.svg" />
      </div>

      <div onClick={() => openWindow("Note")} className="icon">
        <img src="src/assets/note.svg" />
      </div>

      <div onClick={() => openWindow("Pdf")} className="icon">
        <img src="src/assets/pdf.svg" />
      </div>

      <div onClick={() => openWindow("Spotify")} className="icon">
        <img src="src/assets/spotify-2.svg" />
      </div>

      <div onClick={() => openWindow("Youtube")} className="icon">
        <img src="src/assets/wiki.svg" />
      </div>

      <div onClick={() => openWindow("MyTerminal")} className="icon">
        <img src="src/assets/windows-terminal.svg" />
      </div>

    </footer>
  )
}

export default Dock
