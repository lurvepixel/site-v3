import 'twin.macro'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'

import { DefaultLayout } from '@/layouts/default-layout'
import { Seo } from '@/elements/seo'
import { Stage, Sprite } from '@/elements/pixi'

const Home: NextPage<{ code: string }> = ({ code }) => {
  return (
    <DefaultLayout>
      <Seo title="Trying out Pixi" />
      <div tw="container mx-auto">
        <Stage width={480} height={320} options={{ backgroundColor: 0xeef1f5 }}>
          <Sprite
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
            scale={{ x: 0.5, y: 0.5 }}
            anchor={0.5}
            x={150}
            y={150}
          />
        </Stage>
      </div>
    </DefaultLayout>
  )
}

export default Home
