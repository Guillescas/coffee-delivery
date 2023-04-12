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
  CREDIT_CARD = 'Cartão de crédito',
  DEBIT_CARD = 'Cartão de débito',
  MONEY = 'Dinheiro'
}
