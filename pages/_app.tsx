import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout from '@/components/layout'
import LoginModal from '@/components/Modals/loginmodal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
