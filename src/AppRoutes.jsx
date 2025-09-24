import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Paginas/Inicio'
import SobreMim from './Paginas/SobreMim'
import Menu from './Paginas/Menu'

function AppRoutes() {

  return (
      <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element = {<Inicio/>}/>
            <Route path ="/sobremim" element = {<SobreMim/>}/>
            <Route path ="*" element = {<Inicio/>}/>
          </Routes>
      </BrowserRouter>

  )
}

export default AppRoutes
