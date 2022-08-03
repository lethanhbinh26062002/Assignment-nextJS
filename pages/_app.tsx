import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { SWRConfig } from 'swr'
import instance from '../api/instance'
import { AppPropsWithLayout } from '../models/layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout
  return(
  <LayoutWrapper>
    <SWRConfig value={{ fetcher: async(url) => await instance.get(url)}}>
      <Component {...pageProps} />
    </SWRConfig>
  </LayoutWrapper >
  )
}

export default MyApp
