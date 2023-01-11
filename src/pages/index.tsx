import { useState } from 'react'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Image from 'next/image'

import { useTheme } from 'styled-components'
import { Info } from 'components/Info'
import { Header } from 'components/Header'
import { CoffeeCard } from 'components/CoffeeCard'

import * as Styles from 'styles/pages/Home'

import savedCoffees from '../../coffees.json'

export default function Home() {
  const theme = useTheme()

  const [coffees, setCoffees] = useState(savedCoffees)

  return (
    <Styles.HomeContainer>
      <Header />

      <section id="presentation">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <Info
              icon={<ShoppingCart weight="fill" />}
              color={theme.colors.primary[700]}
            >
              Compra simples e segura
            </Info>

            <Info
              icon={<Package weight="fill" />}
              color={theme.colors.baseText}
            >
              Embalagem mantém o café intacto
            </Info>

            <Info
              icon={<Timer weight="fill" />}
              color={theme.colors.primary[500]}
            >
              Entrega rápida e rastreada
            </Info>

            <Info
              icon={<Coffee weight="fill" />}
              color={theme.colors.secondary[500]}
            >
              O café chega fresquinho até você
            </Info>
          </div>
        </div>

        <Image
          src="/big-coffee.png"
          alt="Imagem de um copo de café com grãos de café ao fundo"
          width={476}
          height={360}
        />
      </section>

      <section id="products">
        <h2>Nossos cafés</h2>

        <div className="coffees">
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </Styles.HomeContainer>
  )
}
