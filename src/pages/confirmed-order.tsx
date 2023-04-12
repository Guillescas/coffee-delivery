import { ReactElement } from 'react'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useCart } from 'hooks/useCart'

import { useTheme } from 'styled-components'
import { Info } from 'components/Info'

import * as Styles from 'styles/pages/confirmed-order'

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false
})

function ConfirmedOrder(): ReactElement {
  const { userAdress, paymentMethod } = useCart()
  const theme = useTheme()

  return (
    <Styles.ConfirmedOrderContainer>
      <DynamicHeader />

      <main>
        <div>
          <h1>Pedido confirmado!</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <div className="box">
            <div className="background-box" />

            <Info
              icon={<MapPin weight="fill" />}
              color={theme.colors.secondary[500]}
            >
              Entrega em{' '}
              <strong>
                {userAdress?.street}, {userAdress?.number}
              </strong>
              <br />
              {userAdress?.district} - {userAdress?.city}, {userAdress?.state}
            </Info>
            <Info
              icon={<Timer weight="fill" />}
              color={theme.colors.primary[500]}
            >
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </Info>
            <Info
              icon={<CurrencyDollar weight="fill" />}
              color={theme.colors.primary[700]}
            >
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </Info>
          </div>
        </div>

        <Image
          src="/motoboy.png"
          alt="Ilustração de um motoboy dirigindo uma moto"
          width={492}
          height={293}
        />
      </main>
    </Styles.ConfirmedOrderContainer>
  )
}

export default ConfirmedOrder
