import { AppProps } from 'next/app'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

import 'tailwindcss/dist/base.min.css'

import { H1 } from 'elements/atoms/headings'

// import "styles/debug.css";

/**
 * Use this if you want to make initial setup,
 * import global CSS and add fonts,
 * or to add global context providers
 */

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Carbon</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MDXProvider
        components={{
          h1: H1,
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </div>
  )
}

export default App
