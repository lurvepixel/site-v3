import 'twin.macro'
import { useApp, Stage, Sprite } from '@inlet/react-pixi/animated'
import { useSpring } from 'react-spring'

import { FC, WC } from '@/common/types'

const Canvas: FC = () => {
  const app = useApp()

  const style = useSpring({
    from: {
      // using renderer.screen.width over renderer.width ensures
      // it is same in retina and non-retina devices
      x: app.renderer.screen.width / 2 - 20,
      y: app.renderer.screen.height / 2 - 20,
    },
    to: {
      x: app.renderer.screen.width / 2 + 20,
      y: app.renderer.screen.height / 2 + 20,
    },
    loop: { reverse: true },
  })

  return (
    <>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
        scale={0.5}
        anchor={0.5}
        {...style}
      />
    </>
  )
}

// FIXME type of next/dynamic using global override
export const PixiPg: FC<WC> = () => {
  return (
    <Stage
      width={640}
      height={480}
      options={{
        backgroundColor: 0xeef1f5,
        // for Retina and HiDPI - multiplies sizes of renderer with resolution
        resolution: window.devicePixelRatio,
        // scale back to defined width and height
        autoDensity: true,
      }}
    >
      <Canvas />
    </Stage>
  )
}
