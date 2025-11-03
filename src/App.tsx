import './App.css'
import {  Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Mangas from './pages/Mangas'
import Colecciones from './pages/Colecciones'
import Login from './pages/Login'
import Registro from './pages/Registro'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/mangas" element={<Mangas />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/form" element={<Form />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
    </Routes>
  )
}

export default App
