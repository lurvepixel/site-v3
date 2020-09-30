import 'twin.macro'
import dynamic from 'next/dynamic'

import { FC } from '~/shared/types'
import { DefaultLayout } from '~/elements/layouts/default-layout'
import { Seo } from '~/elements/seo'

const ZContent = dynamic(
  import('~/elements/page-content/experiments/z-content').then(mod => mod.ZContent),
  { ssr: false }
)

const Z: FC = () => {
  return (
    <DefaultLayout>
      <Seo title="Z" />
      <div tw="container mx-auto">
        <ZContent />
      </div>
    </DefaultLayout>
  )
}

export default Z
