import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Links, NotFound } from './pages'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    AOS.init()
  }, [])
  
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
