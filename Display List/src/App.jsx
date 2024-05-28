
import './App.css'

function App() {

  const item = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

  return (
    <div>
      <ul>
        {
          item.map((item, index) => {
            return <li key={index}> {item} </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
