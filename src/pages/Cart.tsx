import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '@/stores/useCart' // 🧠 tu versión con Zustand
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

const Cart = () => {
  const { items, add, remove, clear, total } = useCart()
  const navigate = useNavigate()

  const subtotal = total()
  const tax = subtotal * 0.1 // 10% IVA
  const finalTotal = subtotal + tax

  // 🛒 Si el carrito está vacío
  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
          <p className="text-muted-foreground">Aún no has agregado ningún producto.</p>
          <Button asChild>
            <Link to="/productos">Ver productos</Link>
          </Button>
        </div>
      </main>
    )
  }

  // 🧾 Vista del carrito con productos
  return (
    <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 🧺 Lista de items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card-anime p-4">
                <div className="flex gap-4">
                  <Link
                    to={`/productos/${item.product.id_producto}`}
                    className="w-24 h-24  overflow-hidden rounded-lg"
                  >
                    <img
                      src={item.product.imagen}
                      alt={item.product.nombre}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/productos/${item.product.id_producto}`}
                      className="font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {item.product.nombre}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      ${item.product.precio.toFixed(2)} c/u
                    </p>

                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            add(item.product, -1) // Restar cantidad
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            add(item.product, 1) // Sumar cantidad
                          }
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => remove(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Quitar
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">
                      ${(item.product.precio * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" onClick={clear} className="w-full">
              <Trash2 className="h-4 w-4 mr-2" />
              Vaciar carrito
            </Button>
          </div>

          {/* 📦 Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="card-anime p-6 space-y-4 sticky top-24">
              <h2 className="text-xl font-bold">Resumen del Pedido</h2>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">IVA (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="text-primary">Gratis</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => navigate('/checkout')}
                className="w-full"
              >
                Proceder al Pago
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link to="/productos">Seguir Comprando</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Cart
