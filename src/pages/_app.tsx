import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'
import type { AppProps } from 'next/app'

import { AppProvider } from 'hooks'

import { GlobalStyles } from 'styles/globals'

import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <title>Coffee Delivery</title>

      <Component {...pageProps} />

      <GlobalStyles />
      <ToastContainer position="top-center" />
    </AppProvider>
  )
}
