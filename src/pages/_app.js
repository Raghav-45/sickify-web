import '@/styles/globals.css'
import Layout from '../../components/Layout'
import ContextProvider from '../../contexts/ContextApi'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
