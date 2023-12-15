import { useState } from 'react'
import './App.css'
import { Button } from "rsuite";

import "rsuite/dist/rsuite.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Thomas Davies-Jones</h1>
      <h2>Portfolio</h2>
      <Button appearance="primary">Hello World</Button>
    </>
  )
}

export default App
