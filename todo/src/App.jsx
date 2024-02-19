
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    setTodos(todos.map(item => item === todo ? todo : item))
    setTodo('')
  }

  const handleDelete = () => {
    setTodos(todos.filter(item => item !== todo))
  }

  const handleAdd = () => {
    if (todo) {
      setTodos([...todos, todo])
      setTodo('')
      console.log(todos);
    }
  }
  

  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  return (
    <>
      <Navbar />
      <div className="container text-center mx-auto my-5 rounded-xl bg-violet-100 shadow-xl p-5">
        <h2 className='text-3xl font-bold text-blue-400'>
          TODO
        </h2>
        <input onChange={handleChange} value={todo} type="text" className="input my-5 rounded-xl bg-violet-200 p-2 w-1/2" placeholder="Add a new task" />
        <button onClick={handleAdd}
          className='bg-violet-600 hover:bg-violet-900 text-white mx-3 py-2 p-2 rounded-md'>
          Add Task
        </button>
        <h2 className='text-lg font-bold text-blue-400'>Yout Todos</h2>
        <div className="todos">
          <div className="todo flex justify-center">
            <div>{todo} </div>
            <div className="buttons">
              <button onClick={handleEdit}
                className='bg-violet-600 hover:bg-violet-900 text-white mx-1 py-1 p-2 rounded-md'>
                Edit
              </button>
              <button onClick={handleDelete}
                className='bg-violet-600 hover:bg-violet-900 text-white mx-1 py-1 p-2 rounded-md'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
