import { ReactElement } from 'react'

import { ThemeProvider } from 'styled-components'

import { AppProviderProps } from './types'

import { light } from 'styles/themes/light'

import { CartProvider } from './useCart'

export function AppProvider(props: AppProviderProps): ReactElement {
  return (
    <CartProvider>
      <ThemeProvider theme={light}>{props.children}</ThemeProvider>
    </CartProvider>
  )
}
