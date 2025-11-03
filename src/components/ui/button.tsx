import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  Versión simplificada y comentada del Button UI.

  - Usa `cva` para declarar variantes (variant, size) de forma declarativa.
  - Soporta `asChild` para renderizar otro nodo (p. ej. un `Link`) manteniendo estilos.
  - Exporta `Button` (forwardRef) y `buttonVariants` si quieres componer estilos externamente.

  Hecho intencionalmente simple para que sea fácil de entender y extender.
*/

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none'

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      default: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border border-gray-200 bg-white hover:bg-gray-50',
      ghost: 'bg-transparent hover:bg-gray-100',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      link: 'text-primary underline-offset-4 hover:underline bg-transparent',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      default: 'h-10 px-4',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10 p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Renderiza el botón como hijo (p.ej. un `<Link>` de react-router) para conservar estilos.
   */
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp: React.ElementType = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
