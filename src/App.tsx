import './App.css'
import {  Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import {Home } from './pages/Home'
import Categorias from './pages/Categorias'
import Login from './pages/Login'
import Registro from './pages/Registro'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Cart from './pages/Cart'
import Products from './pages/Products'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
    </Routes>
  )
}

export default App
