import 'twin.macro'
import { NextPage } from 'next'

import { SimpleLayout } from '~/elements/layouts/simple-layout'
import { Seo } from '~/elements/seo'
import { Heading } from '~/elements/atoms/headings'
import { Link } from '~/elements/atoms/link'

const NotFound: NextPage = () => {
  return (
    <SimpleLayout>
      <Seo title="Not found" />
      <div tw="flex items-center justify-center h-screen">
        <div tw="pb-24 text-center">
          <Heading.H1>Welp, we looked everywhere...</Heading.H1>
          <p tw="text-lg">
            The page you&apos;ve requested does not exist. Let&apos;s head{' '}
            <Link href="/">back to home</Link>.
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}

export default NotFound
