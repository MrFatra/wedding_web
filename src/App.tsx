import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Links } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Links} />
          <Route path='/invite' Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
