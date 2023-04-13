import { ReactElement, useEffect, useState } from 'react'

import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { FormProvider, useForm } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { CheckoutFormProps, PaymentTypesEnum } from 'interfaces/checkout'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'

import { useCart } from 'hooks/useCart'

import { useTheme } from 'styled-components'
import { InputMask } from 'components/inputs/InputMask'
import { Input } from 'components/inputs/Input'
import { CartItem } from 'components/CartItem'
import { Button } from 'components/Button'

import { currencyFormatter } from 'utils/currencyFormatter'

import * as Styles from 'styles/pages/checkout'

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false
})

const schema = Yup.object().shape({
  cep: Yup.string().required('Campo obrigatório'),
  street: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  district: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório')
})

function Checkout(): ReactElement {
  const router = useRouter()
  const theme = useTheme()
  const { cart, cleanCart, setUserAdress, setPaymentMethod } = useCart()

  const methods = useForm<CheckoutFormProps>({
    resolver: yupResolver(schema)
  })

  const [isScreenLoaded, setIsScreenLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [
    selectedPaymentType,
    setSelectedPaymentType
  ] = useState<PaymentTypesEnum | null>(null)

  const [inputsStatus, setInputsStatus] = useState({
    street: {
      disabled: true
    },
    district: {
      disabled: true
    },
    city: {
      disabled: true
    },
    state: {
      disabled: true
    }
  })

  function placeOrder(data: CheckoutFormProps) {
    if (!selectedPaymentType) {
      toast.error('Selecione uma opção de pagamento')

      return
    }

    router.push('/confirmed-order')
    cleanCart()
    setUserAdress(data)
    setPaymentMethod(selectedPaymentType)
  }

  function selectPaymentType(paymentType: PaymentTypesEnum) {
    if (selectedPaymentType === paymentType) {
      setSelectedPaymentType(null)

      return
    }

    setSelectedPaymentType(paymentType)
  }

  function getUserAddress() {
    const cep = methods.getValues('cep')

    const formattedCep = cep.replace(' ', '')

    if (formattedCep.length === 9) {
      setIsLoading(true)

      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          if (response.data.erro) {
            toast.error('Erro ao buscar endereço')

            return
          }

          setInputsStatus({
            street: {
              disabled: response.data.logradouro.length !== 0
            },
            district: {
              disabled: response.data.bairro.length !== 0
            },
            city: {
              disabled: response.data.localidade.length !== 0
            },
            state: {
              disabled: response.data.uf.length !== 0
            }
          })

          methods.setValue('street', response.data.logradouro)
          methods.setValue('district', response.data.bairro)
          methods.setValue('city', response.data.localidade)
          methods.setValue('state', response.data.uf)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    getUserAddress()
  }, [methods.watch('cep')])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScreenLoaded(true)
    }
  }, [])

  const totalPrice = cart.reduce(
    (accumulator, coffee) => accumulator + coffee.price * coffee.quantity,
    0
  )
  const totalDelivery = 3.3

  return (
    <FormProvider {...methods}>
      <Styles.CheckoutContainer>
        <DynamicHeader />

        <main>
          <div>
            <h2>Complete seu pedido</h2>

            <Styles.FormBox>
              <Styles.FormBoxHeader>
                <div>
                  <MapPin color={theme.colors.primary[700]} size={22} />

                  <div className="line" />
                </div>

                <div>
                  <h4>Endereço de entrega</h4>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </Styles.FormBoxHeader>

              <form
                id="address-form"
                onSubmit={methods.handleSubmit(placeOrder)}
              >
                <div className="limited-input">
                  <InputMask
                    name="cep"
                    mask="99999-999"
                    placeholder="12345-678"
                    label="CEP"
                    isLoading={isLoading}
                    errorMessage={
                      methods.formState.errors.cep &&
                      `${methods.formState.errors.cep.message}`
                    }
                  />
                </div>

                <div>
                  <Input
                    name="street"
                    placeholder="Rua dos Bobos"
                    label="Rua"
                    disabled={inputsStatus.street.disabled}
                    errorMessage={
                      methods.formState.errors.street &&
                      `${methods.formState.errors.street.message}`
                    }
                  />
                </div>

                <div className="two-columns">
                  <Input
                    name="number"
                    placeholder="123"
                    label="Número"
                    errorMessage={
                      methods.formState.errors.number &&
                      `${methods.formState.errors.number.message}`
                    }
                  />
                  <Input
                    name="complement"
                    placeholder="Ao lado de um posto de gasolina"
                    label="Complemento"
                    errorMessage={
                      methods.formState.errors.complement &&
                      `${methods.formState.errors.complement.message}`
                    }
                  />
                </div>

                <div className="three-columns">
                  <Input
                    name="district"
                    placeholder="Vista alegre"
                    label="Bairro"
                    disabled={inputsStatus.district.disabled}
                    className="limited-input"
                    errorMessage={
                      methods.formState.errors.district &&
                      `${methods.formState.errors.district.message}`
                    }
                  />
                  <Input
                    name="city"
                    placeholder="São Paulo"
                    label="Cidade"
                    disabled={inputsStatus.city.disabled}
                    errorMessage={
                      methods.formState.errors.city &&
                      `${methods.formState.errors.city.message}`
                    }
                  />
                  <Input
                    name="state"
                    placeholder="SP"
                    label="Estado"
                    disabled={inputsStatus.state.disabled}
                    errorMessage={
                      methods.formState.errors.state &&
                      `${methods.formState.errors.state.message}`
                    }
                  />
                </div>
              </form>
            </Styles.FormBox>

            <Styles.FormBox>
              <Styles.FormBoxHeader>
                <div>
                  <CurrencyDollar
                    color={theme.colors.secondary[500]}
                    size={22}
                  />
                </div>

                <div>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </Styles.FormBoxHeader>

              <div className="payment-options-wrapper">
                <Styles.PaymentOption
                  active={selectedPaymentType === PaymentTypesEnum.CREDIT_CARD}
                  onClick={() =>
                    selectPaymentType(PaymentTypesEnum.CREDIT_CARD)
                  }
                >
                  <CreditCard color={theme.colors.secondary[500]} />

                  <p>Cartão de crédito</p>
                </Styles.PaymentOption>
                <Styles.PaymentOption
                  active={selectedPaymentType === PaymentTypesEnum.DEBIT_CARD}
                  onClick={() => selectPaymentType(PaymentTypesEnum.DEBIT_CARD)}
                >
                  <Bank color={theme.colors.secondary[500]} />

                  <p>Cartão de débito</p>
                </Styles.PaymentOption>
                <Styles.PaymentOption
                  active={selectedPaymentType === PaymentTypesEnum.MONEY}
                  onClick={() => selectPaymentType(PaymentTypesEnum.MONEY)}
                >
                  <Money color={theme.colors.secondary[500]} />

                  <p>Dinheiro</p>
                </Styles.PaymentOption>
              </div>
            </Styles.FormBox>
          </div>

          <div>
            <h2>Cafés selecionados</h2>

            {isScreenLoaded && (
              <Styles.Box>
                <div>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      imageSrc={item.imageSrc}
                      itemId={item.id}
                      name={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </div>

                <div className="resume">
                  <table cellSpacing={12}>
                    <tbody>
                      <tr>
                        <td>Total de itens</td>
                        <td>{currencyFormatter(totalPrice)}</td>
                      </tr>
                      <tr>
                        <td>Entrega</td>
                        <td>{currencyFormatter(totalDelivery)}</td>
                      </tr>
                    </tbody>

                    <tfoot>
                      <tr>
                        <td>Total</td>
                        <td>{currencyFormatter(totalPrice + totalDelivery)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <Button
                  background={theme.colors.primary[500]}
                  fontColor={theme.colors.neutral}
                  disabled={cart.length === 0}
                  type="submit"
                  form="address-form"
                >
                  Confirmar pedido
                </Button>
              </Styles.Box>
            )}
          </div>
        </main>
      </Styles.CheckoutContainer>
    </FormProvider>
  )
}

export default Checkout
