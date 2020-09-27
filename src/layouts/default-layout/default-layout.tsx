import tw, { css } from 'twin.macro'

import { FC, WC } from '~/common/types'
import { Link } from '~/elements/atoms/link'

export const DefaultLayout: FC<WC> = ({ children }) => {
  return (
    <>
      <header tw="py-3">
        <div tw="container mx-auto">
          <nav>
            <ul
              css={css`
                ${tw`flex justify-end`}
              `}
            >
              <li tw="mr-6">
                <Link href="/experiments">Experiments</Link>
              </li>
              <li tw="mr-6">
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

/*
TODO
 return (
    <div className="relative">
      <Seo title={pageTitle} />
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
*/
