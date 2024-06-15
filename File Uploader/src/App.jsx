import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  

  return (
    <div>
      <input type="file" accept='image/*' onChange={handleChange} />
      {file && <img src={URL.createObjectURL(file)} alt='Image' />}
    </div>
  )
}

export default App
