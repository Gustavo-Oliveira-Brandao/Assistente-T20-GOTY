
import './App.scss'
import FichaPersonagem from './pages/ficha-personagem/ficha-personagem'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FichaPersonagem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
