import Modal from 'react-modal'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { light } from 'styles/themes/light'
import { GlobalStyles } from 'styles/globals'

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  )
}
