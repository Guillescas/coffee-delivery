import { useEffect, useState } from 'react'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useTheme } from 'styled-components'
import { Loading } from 'components/Loading'
import { Info } from 'components/Info'
import { CoffeeProps } from 'components/CoffeeCard/types'
import { CoffeeCard } from 'components/CoffeeCard'

import * as Styles from 'styles/pages/home'

import coffeesList from '../../db.json'

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false
})

export default function Home() {
  const theme = useTheme()

  const [isLoading, setIsLoading] = useState(true)
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setCoffees(coffeesList.coffees)
    }, 1000)
  }, [])

  return (
    <Styles.HomeContainer>
      <DynamicHeader />

      <section id="presentation" className="animate-fade-in">
        <div>
          <h1 className="animate-slide-in">Encontre o café perfeito para qualquer hora do dia</h1>

          <p className="animate-slide-in-delayed">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="animate-fade-in-up">
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
          className="animate-fade-in-right"
        />
      </section>

      <section id="products" className="animate-fade-in">
        <h2 className="animate-slide-in">Nossos cafés</h2>

        {isLoading && (
          <div className="loading-wrapper">
            <p>Carregando cafés...</p>
            <Loading />
          </div>
        )}

        {coffees.length === 0 && !isLoading && (
          <div>
            <p>Ops, parece que a cafeiteira não está funcionando hoje...</p>
          </div>
        )}

        <div className="coffees animate-fade-in-up">
          {!isLoading &&
            coffees.length > 0 &&
            coffees.map(coffee => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </div>
      </section>
    </Styles.HomeContainer>
  )
}
