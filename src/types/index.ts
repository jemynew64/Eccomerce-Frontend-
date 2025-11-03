// Interfaces generadas a partir del esquema SQL provisto
// Tablas: Clientes, Direcciones, Categorias, Productos, Carrito, Items_Carrito,
// Pedidos, Detalles_Pedido

export type PedidoEstado =
	| 'Pendiente'
	| 'Procesando'
	| 'Enviado'
	| 'Entregado'
	| 'Cancelado'

export interface Cliente {
	id_cliente: number
	nombre: string
	email: string
	// en la capa de aplicación nunca expongas password_hash directamente
	password_hash: string
	telefono?: string | null
	fecha_registro: string | Date
}

export interface Direccion {
	id_direccion: number
	id_cliente: number
	calle: string
	ciudad: string
	estado?: string | null
	codigo_postal: string
	tipo_direccion?: string | null // ejemplo: 'Envío', 'Facturación'
}

export interface Categoria {
	id_categoria: number
	nombre: string
}

export interface Producto {
	id_producto: number
	nombre: string
	imagen: string
	descripcion?: string | null
	precio: number // NUMERIC(10,2) -> number en TS (puedes usar string si prefieres precisión)
	stock: number
	id_categoria: number
}

// Alias compatible con ejemplos que importan `Product`
export type Product = Producto

export interface Carrito {
	id_cliente: number
}

export interface ItemCarrito {
	id_item: number
	id_cliente: number
	id_producto: number
	cantidad: number
}

export interface Pedido {
	id_pedido: number
	id_cliente: number
	id_direccion_envio?: number | null
	fecha_pedido: string | Date
	total: number
	estado: PedidoEstado | string
}

export interface DetallePedido {
	id_detalle: number
	id_pedido: number
	id_producto: number
	nombre_producto_snapshot: string
	precio_unitario: number
	cantidad: number
}

// Export por defecto un objeto vacío para permitir importaciones flexibles si se necesita
export default {}

