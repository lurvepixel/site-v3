import 'twin.macro'
import { useState } from 'react'
import { Sprite, Stage } from '@inlet/react-pixi/animated'

import { FC } from '~/shared/types'

export const Z: FC = () => {
  return (
    <div tw="container mx-auto">
      <div>yass</div>
      <Stage width={320} height={320} options={{ backgroundColor: 0xccc }}>
        <Sprite image="./bunny.png" x={100} y={100} />
      </Stage>
    </div>
  )
}
