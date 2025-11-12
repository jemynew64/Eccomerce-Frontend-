import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import type { Producto, Categoria } from '@/types'

export const Home = () => {
  // Datos de ejemplo para categorías
  const [categories] = useState<Categoria[]>([
    { id_categoria: 1, nombre: 'Figuras' },
    { id_categoria: 2, nombre: 'Ropa' },
    { id_categoria: 3, nombre: 'Accesorios' },
    { id_categoria: 4, nombre: 'Manga' },
    { id_categoria: 5, nombre: 'Posters' },
    { id_categoria: 6, nombre: 'Juguetes' },
  ])

  // Datos de ejemplo para productos destacados
  const [featuredProducts] = useState<Producto[]>([
    {
      idProducto: 1,
      nombre: 'Figura Naruto Uzumaki',
      imagenUrl: 'https://via.placeholder.com/300x400?text=Naruto',
      descripcion: 'Figura coleccionable de alta calidad',
      precio: 89.99,
      stock: 15,
      id_categoria: 1,
    },
    {
      idProducto: 2,
      nombre: 'Camiseta One Piece',
      imagenUrl: 'https://via.placeholder.com/300x400?text=One+Piece',
      descripcion: 'Camiseta oficial con diseño exclusivo',
      precio: 29.99,
      stock: 50,
      id_categoria: 2,
    },
    {
      idProducto: 3,
      nombre: 'Llavero Attack on Titan',
      imagenUrl: 'https://via.placeholder.com/300x400?text=AOT',
      descripcion: 'Llavero de metal con emblema',
      precio: 12.99,
      stock: 100,
      id_categoria: 3,
    },
    {
      idProducto: 4,
      nombre: 'Manga Demon Slayer Vol. 1',
      imagenUrl: 'https://via.placeholder.com/300x400?text=Demon+Slayer',
      descripcion: 'Primer volumen de la serie',
      precio: 9.99,
      stock: 30,
      id_categoria: 4,
    },
  ])

  const [loading] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Bienvenido a{' '}
                <span className="bg-linear-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  AnimeVerse
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubre merchandising exclusivo de anime, figuras coleccionables, ropa y más de tus series favoritas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="btn-primary">
                  <Link to="/productos">
                    Comprar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg"  asChild className="text-amber-50 bg-accent">
                  <Link to="/categorias">Ver Categorías</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Comprar por Categoría</h2>
              <Button variant="ghost" asChild>
                <Link to="/categories">
                  Ver Todas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card-anime h-40 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                  <Link
                    key={category.id_categoria}
                    to={`/products?category=${category.id_categoria}`}
                    className="card-anime group overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <div className="flex items-center justify-center h-full">
                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {category.nombre}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Productos Destacados */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Productos Destacados</h2>
              </div>
              <Button variant="ghost" asChild>
                <Link to="/productos">
                  Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="card-anime h-96 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.slice(0, 4).map((product, index) => (
                  <div
                    key={product.idProducto}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sección CTA */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Únete a la Comunidad AnimeVerse
              </h2>
              <p className="text-lg text-muted-foreground">
                Regístrate hoy y obtén acceso exclusivo a lanzamientos de edición limitada, preventas y descuentos solo para miembros.
              </p>
              <Button size="lg" asChild className="btn-primary">
                <Link to="/auth">Crear Cuenta</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}