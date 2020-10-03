import 'twin.macro'
import dynamic from 'next/dynamic'

import { FC } from '~/shared/types'
import { DefaultLayout } from '~/elements/layouts/default-layout'
import { Seo } from '~/elements/seo'

const EkamContent = dynamic(
  import('~/elements/page-content/experiments/01-ekam-content').then(
    mod => mod.EkamContent
  ),
  { ssr: false }
)

const Ekam: FC = () => {
  return (
    <DefaultLayout>
      <Seo title="Ekam" />
      <div tw="container mx-auto">
        <EkamContent />
      </div>
    </DefaultLayout>
  )
}

export default Ekam
