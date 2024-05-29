import { useState } from 'react'
import './App.css'

function App() {
  const [backGroundColor, setBackGroundColor] = useState('white')

  const handleClick = () => {
    const newColor = backGroundColor === 'white' ? "blue" : 'white'
    setBackGroundColor(newColor)
  }

  return (
    <div onClick={handleClick} style={{
      backGroundColor,
      color: 'white',
      width: "200px",
      height: "200px",
      cursor: 'pointer'
    }}>
      Click me to change color
    </div>
  )
}

export default App
