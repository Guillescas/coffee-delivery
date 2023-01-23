export interface QuantitySelectorProps {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
  isDecreaseButtonDisabled?: boolean
}
