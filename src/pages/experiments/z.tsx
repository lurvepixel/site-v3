import 'twin.macro'
import dynamic from 'next/dynamic'

import { FC } from '~/shared/types'
import { DefaultLayout } from '~/elements/layouts/default-layout'
import { Seo } from '~/elements/seo'

const ZContent = dynamic(import('~/elements/page-content/experiments/z').then(mod => mod.Z))

const Z: FC = () => {
  return (
    <DefaultLayout>
      <Seo title="Z" />
      <ZContent />
    </DefaultLayout>
  )
}

export default Z
