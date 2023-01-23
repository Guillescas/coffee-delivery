import { ReactElement, useRef } from 'react'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Image from 'next/image'

import { useTheme } from 'styled-components'
import { Info } from 'components/Info'
import { Header } from 'components/Header'

import * as Styles from 'styles/pages/confirmed-order'

function ConfirmedOrder(): ReactElement {
  const theme = useTheme()

  return (
    <Styles.ConfirmedOrderContainer>
      <Header />

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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
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
