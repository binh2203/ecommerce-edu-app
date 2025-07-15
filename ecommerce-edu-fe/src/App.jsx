import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer /> 
    </>
  )
}

export default App
