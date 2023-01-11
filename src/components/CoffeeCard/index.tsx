import { ReactElement } from 'react'

import { ShoppingCart } from 'phosphor-react'
import Image from 'next/image'

import { useTheme } from 'styled-components'
import { QuantitySelector } from 'components/QuantitySelector'
import { Button } from 'components/Button'

import { currencyFormatter } from 'utils/currencyFormatter'

import { CoffeeCardProps } from './types'

import * as Styles from './styles'

export function CoffeeCard(props: CoffeeCardProps): ReactElement {
  const theme = useTheme()

  const coffee = props.coffee

  return (
    <Styles.CoffeeCardContainer>
      <Image
        src={coffee.imageSrc}
        alt={`Imagem de ${coffee.title} em uma xícara`}
        width={120}
        height={120}
      />

      <div className="content">
        <div className="image-space" />

        <div className="tags-wrapper">
          {coffee.tags.length > 0 &&
            coffee.tags.map(tag => (
              <Styles.CoffeeTag key={tag}>{tag}</Styles.CoffeeTag>
            ))}
        </div>

        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>

        <div className="footer">
          <p>
            R$
            <span>{currencyFormatter(coffee.price).slice(2)}</span>
          </p>

          <QuantitySelector
            quantity={0}
            changeQuantity={() => {
              return console.log('a')
            }}
          />

          <Button
            background={theme.colors.secondary[700]}
            fontColor={theme.colors.baseCard}
          >
            <ShoppingCart weight="fill" size={22} />
          </Button>
        </div>
      </div>
    </Styles.CoffeeCardContainer>
  )
}
