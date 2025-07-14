import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
