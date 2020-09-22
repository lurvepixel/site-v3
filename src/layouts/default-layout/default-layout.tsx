import 'twin.macro'

import { Link } from '@/elements/atoms/link'
import { FC, WC } from '@/common/types'

export const DefaultLayout: FC<WC> = ({ children }) => {
  return (
    <>
      <header tw="py-3">
        <div tw="container mx-auto">
          <nav tw="text-lg">
            <ul tw="flex justify-end">
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
