import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Note = ({windowName,windowState,setWindowState}) => {

  const [text, setText] = useState("")

  useEffect(() => {
    fetch("/noor.txt")
      .then(res => res.text())
      .then(data => setText(data))
      .catch(err => console.log(err))
  }, [])

  return (
      <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
      <div
        style={{
          height: "100%",
          overflow: "auto",
          padding: "12px"
        }}
      >
        {text ? <SyntaxHighlighter language="typescript" style={atelierDuneDark} >
          {text}
        </SyntaxHighlighter> : "Loading..."}
      </div>
    </MacWindow>
  )
}

export default Note
