import 'twin.macro'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { DefaultLayout } from '@/layouts/default-layout'
import { Seo } from '@/elements/seo'

export const PixiPg = dynamic(() => import('@/elements/pixi-pg').then(mod => mod.PixiPg), {
  ssr: false,
})

const Pixi: NextPage<{ code: string }> = ({ code }) => {
  return (
    <DefaultLayout>
      <Seo title="Trying out Pixi" />
      <PixiPg />
      <div tw="container mx-auto"></div>
    </DefaultLayout>
  )
}

export default Pixi
