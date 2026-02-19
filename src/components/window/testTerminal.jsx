import React, { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'
import MacWindow from './MacWindow'

const MyTerminal = ({windowName,windowState,setWindowState}) => {

  const terminalRef = useRef(null)

  useEffect(() => {

    const term = new Terminal({

      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, Consolas, monospace',

      theme: {
        background: '#0d1117',
        foreground: '#c9d1d9',
        cursor: '#00ff9c',

        black: '#0d1117',
        green: '#00ff9c',
        yellow: '#f1fa8c',
        blue: '#58a6ff',
        red: '#ff5555'
      }

    })

    term.open(terminalRef.current)

    // Boot Text
    term.writeln('\x1b[32mWelcome Noor MacOS Terminal\x1b[0m')
    term.writeln('\x1b[90mType "help" to see commands\x1b[0m')

    const prompt = () => {
      term.write('\r\n\x1b[34mnoor@mac\x1b[0m:\x1b[32m~\x1b[0m$ ')
    }

    prompt()

    let command = ''

    term.onData(data => {

      // ENTER
      if (data === '\r') {

        term.writeln('')

        if (command === 'help') {
          term.writeln('\x1b[33mAvailable Commands:\x1b[0m')
          term.writeln('about')
          term.writeln('clear')
          term.writeln('date')
        }

        else if (command === 'about') {
          term.writeln('React MacOS Desktop Terminal')
        }

        else if (command === 'date') {
          term.writeln(new Date().toString())
        }

        else if (command === 'clear') {
          term.clear()
        }

        else if (command !== '') {
          term.writeln('\x1b[31mCommand not found\x1b[0m')
        }

        command = ''
        prompt()
      }

      // BACKSPACE
      else if (data === '\u007F') {
        if (command.length > 0) {
          command = command.slice(0, -1)
          term.write('\b \b')
        }
      }

      // NORMAL INPUT
      else {
        command += data
        term.write(data)
      }

    })

  }, [])

  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} > 
   <div
  ref={terminalRef}
  className="mac-terminal"
>
</div>

    </MacWindow>
  )
}

export default MyTerminal
