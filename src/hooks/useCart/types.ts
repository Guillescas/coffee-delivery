import { Dispatch, SetStateAction } from 'react'

import { PaymentTypesEnum } from 'interfaces/checkout'

import { CoffeeProps } from 'components/CoffeeCard/types'

export interface CoffeeCartProps extends CoffeeProps {
  quantity: number
}

export interface UserAdressProps {
  cep: string
  street: string
  number: string
  district: string
  city: string
  state: string
}

export interface CartContextData {
  cart: CoffeeCartProps[]
  addCoffeeToCart: (product: CoffeeCartProps) => void
  removeCoffeeFromCart: (productId: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  cleanCart: () => void
  userAdress: UserAdressProps | null
  paymentMethod: PaymentTypesEnum | null
  setPaymentMethod: Dispatch<SetStateAction<PaymentTypesEnum | null>>
  setUserAdress: Dispatch<SetStateAction<UserAdressProps | null>>
}
