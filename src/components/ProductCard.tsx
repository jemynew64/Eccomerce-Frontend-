import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/stores/useCart' // ← usa tu store Zustand
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { add } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // evita que el Link se dispare
    add(product)
  }

  return (
    <Link to={`/products/${product.id_producto}`}>
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border bg-background transition-shadow hover:shadow-lg">
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Badges dinámicos */}
          {/* {product.destacado && (
            <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
              Destacado
            </Badge>
          )} */}

          {product.stock === 0 && (
            <Badge variant="destructive" className="absolute right-2 top-2">
              Sin stock
            </Badge>
          )}

          {product.stock > 0 && product.stock < 10 && (
            <Badge variant="destructive" className="absolute right-2 top-2">
              Solo {product.stock} restantes
            </Badge>
          )}
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {product.nombre}
          </h3>

          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
            {product.descripcion}
          </p>

          {/* Precio y botón */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.precio.toFixed(2)}
            </span>

            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-1 h-4 w-4" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
