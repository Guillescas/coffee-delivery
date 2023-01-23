export interface CheckoutFormProps {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

export interface PaymentOptionProps {
  active: boolean
}

export enum PaymentTypesEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  MONEY = 'MONEY'
}
