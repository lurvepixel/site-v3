import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasSpace, Group, Pt, Geom } from 'pts'
// import { useSpring } from 'react-spring'

import { FC } from '~/shared/types'

const deg2rad = (n: number) => (n * (22 / 7)) / 180

const minMax = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

export const ZContent: FC = () => {
  // setup
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<CanvasSpace | null>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new CanvasSpace(canvasContainer).bindMouse().bindTouch().play()
    space.background = '#e1e9f0'

    spaceRef.current = space

    return () => {
      space.dispose()
      canvasContainer.innerHTML = ''
    }
  }, [])

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    const RADIUS = 10

    space.add((t, td) => {
      for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < 10; ++j) {
          const x = 40 * (i + 1) + 10
          const y = 40 * (j + 1) + 10

          if (
            x - 10 <= space.pointer.x &&
            space.pointer.x <= x + 10 &&
            y - 10 <= space.pointer.y &&
            space.pointer.y <= y + 10
          ) {
            form.fillOnly('#e24').point([x, y], RADIUS, 'circle')
          } else {
            form.fillOnly('gray').point([x, y], RADIUS, 'circle')

            const isPointerAtRight = space.pointer.x > x
            const isPointerBelow = space.pointer.y > y
            const xMag = isPointerAtRight ? 1 : -1
            const yMag = isPointerBelow ? 1 : -1

            // let xShift = Math.abs(x - space.pointer.x) / 15
            // if (xShift > 1) {
            //   xShift = 1
            // }

            // let yShift = Math.abs(y - space.pointer.y) / 15
            // if (yShift > 1) {
            //   yShift = 1
            // }
            const FACTOR = 100

            if (
              Math.abs(x - space.pointer.x) > FACTOR ||
              Math.abs(y - space.pointer.y) > FACTOR
            ) {
              continue
            }

            let xShift = Math.abs(x - space.pointer.x) / FACTOR
            let yShift = Math.abs(y - space.pointer.y) / FACTOR

            form
              .fillOnly(space.background)
              .point([x + xMag * 19 * xShift, y + yMag * 19 * yShift], RADIUS, 'circle')
          }
        }
      }
    })
  }, [])

  return (
    <div
      ref={canvasContainerRef}
      css={css`
        width: 480px;
        height: 480px;
      `}
    />
  )
}
