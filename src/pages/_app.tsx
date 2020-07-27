import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/dist/base.min.css'

// import "styles/debug.css";

/**
 * Use this if you want to make initial setup,
 * import global CSS and add fonts
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
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
