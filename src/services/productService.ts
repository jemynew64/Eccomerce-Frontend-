import api from './api'
import { type Product } from '@/types'

export const getProductos = async (): Promise<Product[]> => {
  const res = await api.get('/productos')
  return res.data
}

export default {
  getProductos,
}
