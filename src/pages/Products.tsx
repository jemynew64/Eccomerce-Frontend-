import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/ProductCard'
import { getProductos } from '@/services/productService'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'
import { type Product } from '@/types'

export default function Products() {
  const { data: products, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ['productos'],
    queryFn: getProductos,
    staleTime: 1000 * 60 * 2, // 2 minutos
  })

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-anime h-80 animate-pulse" />
          ))}
        </div>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Productos</h1>
        <div className="text-red-500">Error al cargar productos. Intenta recargar.</div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Productos</h1>
          <p className="text-muted-foreground">
            {products?.length ?? 0} productos encontrados
          </p>
        </div>

        <Button variant="outline" className="lg:hidden">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((p) => (
          <ProductCard key={p.idProducto} product={p} />
        ))}
      </div>
    </main>
  )
}
