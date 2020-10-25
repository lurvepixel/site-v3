import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/dist/base.min.css'
import tw, { css } from 'twin.macro'

import { FC } from '~/shared/types'
import { font } from '~/styles'
import { MdxWrapper } from '~/elements/mdx-wrapper'

import '~/styles/global.css'
// import "~/styles/debug.css";

/*
  Use this if you want to make initial setup,
  import global CSS and add fonts,
  or to add global context providers
*/

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Ajit Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        css={css`
          ${tw`min-h-screen antialiased break-words text-sky-black bg-sky-gray-100`}
          ${font.sans}
        `}
      >
        <MdxWrapper>
          <Component {...pageProps} />
        </MdxWrapper>
      </div>
    </div>
  )
}

export default App
