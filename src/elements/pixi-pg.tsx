import 'twin.macro'
import { useApp, Stage, Sprite } from '@inlet/react-pixi'

import { FC, WC } from '@/common/types'

export const PixiPg: FC<WC> = () => {
  return (
    <Stage width={480} height={320} options={{ backgroundColor: 0xeef1f5 }}>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
        scale={{ x: 0.5, y: 0.5 }}
        anchor={0.5}
        x={150}
        y={150}
      />
    </Stage>
  )
}
