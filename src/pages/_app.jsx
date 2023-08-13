// pages/_app.js
import { NextUIProvider } from '@nextui-org/react'
import { FileProvider } from '../components/FileContext'
import '/src/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </NextUIProvider>
  )
}

export default App
