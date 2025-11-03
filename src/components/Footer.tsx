export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-background-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="font-bold text-white">AnimeVerse</h4>
            <p className="mt-2 text-sm text-white/70">Tu destino definitivo para productos de anime.</p>
          </div>

          <nav aria-labelledby="shop-heading">
            <h5 id="shop-heading" className="font-semibold text-white">Tienda</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-primary" href="#">Figuras</a></li>
              <li><a className="text-white/70 hover:text-primary" href="#">Ropa</a></li>
              <li><a className="text-white/70 hover:text-primary" href="#">Manga</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="info-heading">
            <h5 id="info-heading" className="font-semibold text-white">Información</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-primary" href="#">Sobre nosotros</a></li>
              <li><a className="text-white/70 hover:text-primary" href="#">Contacto</a></li>
              <li><a className="text-white/70 hover:text-primary" href="#">Preguntas frecuentes</a></li>
              <li><a className="text-white/70 hover:text-primary" href="#">Términos y condiciones</a></li>
            </ul>
          </nav>

          <div>
            <h5 className="font-semibold text-white">Síguenos</h5>
            <div className="mt-2 flex space-x-4">
              <a className="text-white/70 hover:text-primary" href="#" aria-label="Facebook">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
                </svg>
              </a>
              <a className="text-white/70 hover:text-primary" href="#" aria-label="Twitter">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a className="text-white/70 hover:text-primary" href="#" aria-label="Instagram">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.731 4.731 0 11-4.22 4.22 4.731 4.731 0 014.22-4.22zm2.38 0a4.731 4.731 0 11-8.44 0 4.731 4.731 0 018.44 0z" fillRule="evenodd" />
                  <path d="M16.949 7.712a1.21 1.21 0 11-2.42 0 1.21 1.21 0 012.42 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-white/50">
          © 2025 AnimeVerse. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
