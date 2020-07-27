import { NextPage } from 'next'
import 'twin.macro'

import SimpleLayout from 'layouts/SimpleLayout'
import Seo from 'elements/Seo'
import { H1 } from 'elements/atoms/headings'
import Link from 'elements/atoms/Link'

const NotFound: NextPage = () => {
  return (
    <SimpleLayout>
      <Seo title="Not found" />
      <div tw="container mx-auto">
        <H1>Not found</H1>
        <p>
          The page you&apos;ve requested does not exist. Let&apos;s head{' '}
          <Link href="/">back to home</Link>.
        </p>
      </div>
    </SimpleLayout>
  )
}

export default NotFound
