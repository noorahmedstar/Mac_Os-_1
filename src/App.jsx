import { useState } from 'react'
import "./app.scss"

import Dock from './components/dock.jsx'
import Nav from "./components/nav.jsx"

import Github from './components/window/github.jsx'
import Note from './components/window/note.jsx'
import Pdf from './components/window/pdf.jsx'
import Spotify from './components/window/spotify.jsx'
import Youtube from './components/window/youtube.jsx'
import MyTerminal from './components/window/testTerminal.jsx'

import bg from "./assets/bg.jpg";



function App() {

  const [windowState, setWindowState] = useState({
    Github: false,
    Note: false,
    Pdf: false,
    Spotify: false,
    Youtube: false,
    MyTerminal: false
  })

  return (
    <main style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  }}  >

      <Dock windowState={windowState} setWindowState={setWindowState} />
      <Nav /> 

      {windowState.Github && <Github windowName="Github" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.Note && <Note windowName="Note" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.Pdf && <Pdf windowName="Pdf" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.Spotify && <Spotify windowName="Spotify" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.Youtube && <Youtube windowName="Youtube" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.MyTerminal && <MyTerminal windowName="MyTerminal" windowState={windowState} setWindowState={setWindowState} />}

    </main>
  )
}

export default App
