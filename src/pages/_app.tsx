import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import instance from '../api/instance'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from '../app/store'
function MyApp({ Component, pageProps }: AppProps) {
  return <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </SWRConfig>
}

export default MyApp
