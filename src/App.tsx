import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Links, NotFound } from './pages'

function App() {
  
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
