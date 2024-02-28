import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/home'
import About from './Page/about'
import Blog from './Page/blog'
import Navbar from './components/Navbar'
import { ThemeProvider } from './theme-context'


const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* // Navbar */}
        <Navbar />
        {/* // Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App