import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'sonner'
import type { Product } from '@/types'

// 🛒 Tipo base para un ítem del carrito
interface CartItem {
  id: string
  product: Product
  quantity: number
}

// Estado del store de carrito
interface CartState {
  items: CartItem[]

  // acciones
  add: (product: Product, quantity?: number) => void
  remove: (id: string) => void
  clear: () => void

  // selectores/derivados (funciones que devuelven valores calculados)
  total: () => number
  count: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // ➕ Agregar producto al carrito
      add: (product, quantity = 1) => {
        const items = get().items
        const existing = items.find(i => i.product.idProducto === product.idProducto)

        if (existing) {
          // Si ya existe, actualizamos cantidad
          try {
            toast?.success?.(`${product.nombre} actualizado`)
          } catch {
            /* noop */
          }
          set({
            items: items.map(i =>
              i.product.idProducto === product.idProducto
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          })
        } else {
          // Si no existe, lo agregamos nuevo
          try {
            toast?.success?.(`${product.nombre} agregado al carrito`)
          } catch {
            /* noop */
          }
          const id = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

          set({ items: [...items, { id, product, quantity }] })
        }
      },

      // ❌ Eliminar un producto del carrito
      remove: id => {
        set({ items: get().items.filter(i => i.id !== id) })
        try {
          toast?.success?.('Producto eliminado del carrito')
        } catch {
          /* noop */
        }
      },

      // 🧹 Vaciar todo el carrito
      clear: () => {
        set({ items: [] })
        try {
          toast?.success?.('Carrito vaciado')
        } catch {
          /* noop */
        }
      },

      // 💰 Total en dinero (selector)
      total: () => {
        return get().items.reduce((sum, item) => sum + item.product.precio * item.quantity, 0)
      },

      // 🔢 Total de unidades
      count: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    { name: 'cart' }
  )
)

export default useCart
