import '@/styles/globals.css'
import '../styles/styles.css'
import { Roboto_Flex } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const inter = Roboto_Flex({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>Daniel Swinehart</title>
        <meta name="My Site Description" content="First Next.js website"/>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>  
  );
};
