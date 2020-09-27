import 'twin.macro'
import { NextPage } from 'next'

import { DefaultLayout } from '~/elements/layouts/default-layout'
import { Seo } from '~/elements/seo'
import { Heading } from '~/elements/atoms/headings'

const Experiments: NextPage = () => {
  return (
    <DefaultLayout>
      <Seo title="Experiments" />

      <div tw="container mx-auto">
        <Heading.H1>Experiments</Heading.H1>
        <p tw="text-lg">
          This site is itself an experiment: I&rsquo;m experimenting with file structure,
          server-side rendering, styling and mixing canvas to a static site.
          <br />
          However, this page lists only the latter.
        </p>
      </div>
    </DefaultLayout>
  )
}

export default Experiments
