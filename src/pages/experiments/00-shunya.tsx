import 'twin.macro'
import dynamic from 'next/dynamic'

import { FC } from '~/shared/types'
import { DefaultLayout } from '~/elements/layouts/default-layout'
import { Seo } from '~/elements/seo'

const ShunyaContent = dynamic(
  import('~/elements/page-content/experiments/00-shunya-content').then(
    mod => mod.ShunyaContent
  ),
  { ssr: false }
)

const Shunya: FC = () => {
  return (
    <DefaultLayout>
      <Seo title="Shunya" />
      <div tw="container mx-auto">
        <ShunyaContent />
      </div>
    </DefaultLayout>
  )
}

export default Shunya
