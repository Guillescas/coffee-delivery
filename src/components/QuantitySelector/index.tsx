import { ReactElement } from 'react'

import { Minus, Plus } from 'phosphor-react'

import { QuantitySelectorProps } from './types'

import * as Styles from './styles'

export function QuantitySelector(props: QuantitySelectorProps): ReactElement {
  return (
    <Styles.QuantitySelectorContainer>
      <button
        type="button"
        onClick={props.decreaseQuantity}
        disabled={props.isDecreaseButtonDisabled}
      >
        <Minus size={14} />
      </button>

      <span>{props.quantity}</span>

      <button type="button" onClick={props.increaseQuantity}>
        <Plus size={14} />
      </button>
    </Styles.QuantitySelectorContainer>
  )
}
