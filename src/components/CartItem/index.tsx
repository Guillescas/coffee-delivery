import { ReactElement } from 'react'

import { toast } from 'react-toastify'
import { Trash } from 'phosphor-react'
import Image from 'next/image'

import { useCart } from 'hooks/useCart'

import { useTheme } from 'styled-components'
import { QuantitySelector } from 'components/QuantitySelector'
import { ButtonSizesEnum } from 'components/Button/types'
import { Button } from 'components/Button'

import { currencyFormatter } from 'utils/currencyFormatter'

import { CartItemProps } from './types'

import * as Styles from './styles'

export function CartItem(props: CartItemProps): ReactElement {
  const theme = useTheme()
  const { cart, increaseQuantity, decreaseQuantity, removeCoffeeFromCart } =
    useCart()

  function increaseProductQuantity() {
    increaseQuantity(props.itemId)

    toast.success(`Quantidade de "${props.name}" atualizado com sucesso!`)
  }

  function decreaseProductQuantity() {
    if (props.quantity > 1) {
      decreaseQuantity(props.itemId)

      toast.success(`Quantidade de "${props.name}" atualizado com sucesso!`)
    }
  }

  function removeProductFromCart() {
    removeCoffeeFromCart(props.itemId)

    toast.success('Produto removido com sucesso')
  }

  return (
    <Styles.CartItemContainer>
      <div>
        <Image
          src={props.imageSrc}
          alt={`Imagem de ${props.name}`}
          width={64}
          height={64}
        />

        <div>
          <p>{props.name}</p>

          <div className="buttons-wrapper">
            <QuantitySelector
              quantity={
                cart.filter(product => product.id === props.itemId)[0].quantity
              }
              increaseQuantity={increaseProductQuantity}
              decreaseQuantity={decreaseProductQuantity}
              isDecreaseButtonDisabled={props.quantity === 1}
            />

            <Button
              background={theme.colors.baseButton}
              fontColor={theme.colors.baseText}
              size={ButtonSizesEnum.Medium}
              onClick={removeProductFromCart}
            >
              <Trash color={theme.colors.secondary[500]} />
              Remover
            </Button>
          </div>
        </div>
      </div>

      <span>{currencyFormatter(props.price)}</span>
    </Styles.CartItemContainer>
  )
}
