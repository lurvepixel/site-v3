import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasSpace, Group, Pt, Geom, Rectangle, Const } from 'pts'
import { useSpring, useSprings } from 'react-spring'

import { FC } from '~/shared/types'

const deg2rad = (n: number) => (n * (22 / 7)) / 180

const minMax = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

// TODO update this to add controls, just like you did in codepen

export const EkamContent: FC = () => {
  // setup
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<CanvasSpace | null>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new CanvasSpace(canvasContainer)
      .setup({
        retina: true,
      })
      .bindMouse()
      .bindTouch()
      .play()
    // space.background = '#222'

    spaceRef.current = space

    return () => {
      space.dispose()
      canvasContainer.innerHTML = ''
    }
  }, [])

  const spring = useSpring({
    from: {
      n: 0,
    },
    n: 5,
    loop: { reverse: true },
    config: {
      frequency: 0.6,
      damping: 1,
    },
  })

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    space.add((t, td) => {
      for (let i = 1; i <= 10; ++i) {
        const disp = spring.n.to([0, 5], [5, 20 * i]).get()
        const angle = spring.n.to([0, 5], [0, -45]).get()

        const rect = Rectangle.fromCenter(space.center, [30 * i + disp, 30 * i + disp])

        const poly = Rectangle.corners(rect).rotate2D(Geom.toRadian(angle), space.center)

        form.strokeOnly('#333', 8, 'round').polygon(poly)
      }
    })
  }, [])

  return (
    <>
      <div
        ref={canvasContainerRef}
        css={css`
          cursor: none;
          width: 480px;
          height: 480px;
        `}
      />
    </>
  )
}
