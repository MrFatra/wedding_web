import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Links, NotFound } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Links} />
          <Route path='/invite' Component={Home} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
