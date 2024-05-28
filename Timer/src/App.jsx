import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(60)

  useEffect(() => {
    if(time > 0) {
      const timer = setTimeout(()=> setTime(time - 1),1000)
      return ()=> clearTimeout(timer)
    }
  }, [time])
  

  return (
    <div>
      Time lest: {time} second
    </div>
  )
}

export default App
