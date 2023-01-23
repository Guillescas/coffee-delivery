import { createContext, ReactNode, useContext, useState } from 'react'

import { parseCookies, setCookie } from 'nookies'
import { cookies as CookiesNames } from 'constants/cookies'

import { CartContextData, CoffeeCartProps } from './types'

export const CartContext = createContext({} as CartContextData)

export function CartProvider({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const [cart, setCart] = useState<CoffeeCartProps[]>(() => {
    const cookies = parseCookies()

    if (typeof window === `undefined`) {
      return []
    }

    if (cookies[CookiesNames.cart]) {
      return JSON.parse(cookies[CookiesNames.cart])
    }

    return []
  })

  function addCoffeeToCart(product: CoffeeCartProps) {
    if (product.quantity <= 0) {
      return
    }

    const coffeeInCart = cart.find(coffee => coffee.id === product.id)

    if (coffeeInCart) {
      const updatedCart = cart.map(coffee => {
        if (coffee.id === product.id) {
          return {
            ...coffee,
            quantity: coffee.quantity + product.quantity
          }
        }

        return coffee
      })

      setCart(updatedCart)
      setCookie(null, CookiesNames.cart, JSON.stringify(updatedCart))
    } else {
      const updatedCart = [...cart, product]

      setCart(updatedCart)
      setCookie(null, CookiesNames.cart, JSON.stringify(updatedCart))
    }
  }

  function removeCoffeeFromCart(productId: number) {
    const updatedCart = cart.filter(coffee => coffee.id !== productId)

    setCart(updatedCart)
    setCookie(null, CookiesNames.cart, JSON.stringify(updatedCart))
  }

  function increaseQuantity(productId: number) {
    const updatedCart = cart.map(coffee => {
      if (coffee.id === productId) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1
        }
      }

      return coffee
    })

    setCart(updatedCart)
    setCookie(null, CookiesNames.cart, JSON.stringify(updatedCart))
  }

  function decreaseQuantity(productId: number) {
    const updatedCart = cart.map(coffee => {
      if (coffee.id === productId) {
        return {
          ...coffee,
          quantity: coffee.quantity > 1 ? coffee.quantity - 1 : 1
        }
      }

      return coffee
    })

    setCart(updatedCart)
    setCookie(null, CookiesNames.cart, JSON.stringify(updatedCart))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export default CartContext
