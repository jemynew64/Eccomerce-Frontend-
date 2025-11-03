import api from './api'

export type Product = {
  id?: number
  nombre?: string
  descripcion?: string
  precio?: number
  // campos adicionales desconocidos del backend
  [key: string]: unknown
}

export const getProductos = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>('/productos')
  return res.data
}

export default {
  getProductos,
}
