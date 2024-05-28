import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [post, setPost] = useState('')

  const url = 'https://jsonplaceholder.typicode.com/users'

  const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setPost(data)
    console.log(data);
  }

useEffect(() => {
  fetchUsers()

}, [])

  return (
    <div>
      {
        post ? (
          <div>
            <h1>{post[1].address.city}</h1>
            <p>{post[1].company.name}</p>
            <p>{post[1].email}</p>
          </div>
        ) : "Loading..."
      }
    </div>
  )
}

export default App
