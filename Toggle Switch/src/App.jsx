import { useState } from 'react'
import './App.css'

function App() {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }
  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p> {isToggle ? "On" : "Off"}</p>
    </div>
  )
}

export default App
