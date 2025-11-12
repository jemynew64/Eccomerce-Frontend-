import { useEffect, useState } from 'react'
import { getProductos } from '../services/productService'
import type { Product } from "@/types"
export default function Categorias() {

 const [data, setData] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)

    getProductos()
      .then(res => {
        if (mounted) setData(res)
      })
      .catch(() => {
        if (mounted) setData(null)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => { mounted = false }
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold">Categorias</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : data && data.length > 0 ? (
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No se han podido obtener productos.</p>
      )}
    </div>
  )
}
