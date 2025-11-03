import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'

export default function MainLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavBar />
      </header>

      <div className="flex-1">
        {/* If children provided, render them, otherwise outlet */}
        {children ?? <Outlet />}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
