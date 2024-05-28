import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0)

  return (
    <>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <p>User Input is: {input}</p>
      </div>
    </>
  )
}

export default App
