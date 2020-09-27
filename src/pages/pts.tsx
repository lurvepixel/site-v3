import 'twin.macro'
import { useEffect, useRef } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { SimpleLayout } from '~/layouts/simple-layout'
import { Seo } from '~/elements/seo'
import { Heading } from '~/elements/atoms/headings'
import { Link } from '~/elements/atoms/link'

const PtsStuff = dynamic(() => import('~/elements/pts-stuff').then(mod => mod.PtsStuff), {
  ssr: false,
})

const PtsPage: NextPage = () => {
  return (
    <SimpleLayout>
      <Seo title="Trying out Pts lib" />
      <div tw="container mx-auto">
        <p>Neeche dekho</p>
        <PtsStuff />
      </div>
    </SimpleLayout>
  )
}

export default PtsPage
