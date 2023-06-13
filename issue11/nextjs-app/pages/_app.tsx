import '@/styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Swinehart</title>
        <meta name="My Site Description" content="First Next.js website"/>
      </Head>
      <Component {...pageProps} />
    </>  
  );
};
