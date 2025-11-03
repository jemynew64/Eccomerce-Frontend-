import type { FC } from "react";
import { IconUser, IconShoppingCart, IconSearch } from "@tabler/icons-react";
import { Link } from 'react-router-dom'
import Logo from './ui/Logo'

export const NavBar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-dark backdrop-blur-sm px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo + Nav links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white">
            <Logo className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold tracking-tight">AnimeVerse</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-amber-50 transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              to="/categorias"
              className="text-sm font-medium text-amber-50 transition-colors hover:text-primary"
            >
              Categorías
            </Link>
            <Link
              to="/mangas"
              className="text-sm font-medium text-amber-50 transition-colors hover:text-primary"
            >
              Mangas
            </Link>
            <Link
              to="/colecciones"
              className="text-sm font-medium text-amber-50 transition-colors hover:text-primary"
            >
              Nuevas colecciones
            </Link>
          </nav>
        </div>

        {/* Right: Search + icons */}
        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          {/* Search */}
          <div className="w-full max-w-xs relative">
            <IconSearch
              stroke={1.5}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-dark"
              size={18}
            />
            <input
              type="search"
              placeholder="Search products..."
              className="h-10 w-full rounded-lg bg-card-dark pl-10 pr-4 text-sm text-amber-50 placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark border-none"
            />
          </div>

          {/* Account */}
          <button
            type="button"
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-card-dark text-text-primary-dark transition-colors hover:bg-border-dark"
          >
            <IconUser stroke={1.5} />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-card-dark text-text-primary-dark transition-colors hover:bg-border-dark"
            onClick={() =>
              console.log("hola mundo soy jemal leon dueñas")
            }
          >
            <IconShoppingCart stroke={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};
