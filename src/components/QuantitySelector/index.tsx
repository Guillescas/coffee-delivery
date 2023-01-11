import { ReactElement } from 'react'

import { Minus, Plus } from 'phosphor-react'

import { QuantitySelectorProps } from './types'

import * as Styles from './styles'

export function QuantitySelector(props: QuantitySelectorProps): ReactElement {
  function increaseQuantity() {
    props.changeQuantity(props.quantity + 1)
  }

  function decreaseQuantity() {
    props.changeQuantity(props.quantity - 1)
  }

  return (
    <Styles.QuantitySelectorContainer>
      <button type="button" onClick={decreaseQuantity}>
        <Minus size={14} />
      </button>

      <span>{props.quantity}</span>

      <button type="button" onClick={increaseQuantity}>
        <Plus size={14} />
      </button>
    </Styles.QuantitySelectorContainer>
  )
}
