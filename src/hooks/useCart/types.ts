import { CoffeeProps } from 'components/CoffeeCard/types'

export interface CoffeeCartProps extends CoffeeProps {
  quantity: number
}

export interface CartContextData {
  cart: CoffeeCartProps[]
  addCoffeeToCart: (product: CoffeeCartProps) => void
  removeCoffeeFromCart: (productId: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
}
