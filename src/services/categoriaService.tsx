import api from './api'
import { type Categoria } from '@/types'

export const getCategorias = async (): Promise<Categoria[]> => {
  const res = await api.get('/categorias')
  return res.data
}

export default {
  getCategorias,
}
  