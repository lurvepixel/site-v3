import 'twin.macro'
import { useApp, Stage, Sprite } from '@inlet/react-pixi/animated'
import { useSpring } from '@react-spring/core'

import { FC, WC } from '@/common/types'

const Canvas: FC = () => {
  const app = useApp()

  const style = useSpring({
    from: {
      x: app.renderer.width / 2 - 20,
      y: app.renderer.height / 2 - 20,
    },
    to: {
      x: app.renderer.width / 2 + 20,
      y: app.renderer.height / 2 + 20,
    },
    loop: { reverse: true },
  })

  return (
    <>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
        scale={0.5}
        anchor={0.5}
        x={style.x}
        y={style.y}
      />
    </>
  )
}

// FIXME type of next/dynamic using global override
export const PixiPg: FC<WC> = () => (
  <Stage width={480} height={320} options={{ backgroundColor: 0xeef1f5 }}>
    <Canvas />
  </Stage>
)
