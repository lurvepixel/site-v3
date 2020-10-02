import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasSpace, Group, Pt, Geom } from 'pts'
// import { useSpring } from 'react-spring'

import { FC } from '~/shared/types'

const deg2rad = (n: number) => (n * (22 / 7)) / 180

const minMax = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

// TODO update this to add controls, just like you did in codepen

export const ZContent: FC = () => {
  // setup
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<CanvasSpace | null>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new CanvasSpace(canvasContainer).bindMouse().bindTouch().play()
    space.background = '#222'

    spaceRef.current = space

    return () => {
      space.dispose()
      canvasContainer.innerHTML = ''
    }
  }, [])

  const DEFAULT_FACTOR = 150
  const factorRef = useRef(DEFAULT_FACTOR)
  const handleFactorSliderChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    factorRef.current = parseInt(evt.target.value)
  }

  const DEFAULT_RADIUS = 10
  const radiusRef = useRef(DEFAULT_RADIUS)
  const handleRadiusSliderChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    radiusRef.current = parseInt(evt.target.value)
  }

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    space.add((t, td) => {
      for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < 10; ++j) {
          const x = radiusRef.current * 4 * (i + 1) + radiusRef.current
          const y = radiusRef.current * 4 * (j + 1) + radiusRef.current

          if (
            x - radiusRef.current * 1.5 <= space.pointer.x &&
            space.pointer.x <= x + radiusRef.current * 1.5 &&
            y - radiusRef.current * 1.5 <= space.pointer.y &&
            space.pointer.y <= y + radiusRef.current * 1.5
          ) {
            form.fillOnly('#e24').point([x, y], radiusRef.current, 'circle')
          } else {
            form.fillOnly('#ddd').point([x, y], radiusRef.current, 'circle')

            const isPointerAtRight = space.pointer.x > x
            const isPointerBelow = space.pointer.y > y
            const xMag = isPointerAtRight ? 1 : -1
            const yMag = isPointerBelow ? 1 : -1

            if (
              Math.abs(x - space.pointer.x) > factorRef.current ||
              Math.abs(y - space.pointer.y) > factorRef.current
            ) {
              continue
            }

            let xShift = Math.abs(x - space.pointer.x) / factorRef.current
            let yShift = Math.abs(y - space.pointer.y) / factorRef.current

            form
              .fillOnly(space.background)
              .point(
                [
                  x + xMag * radiusRef.current * 2 * xShift,
                  y + yMag * radiusRef.current * 2 * yShift,
                ],
                radiusRef.current,
                'circle'
              )
          }
        }
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
      <label tw="my-4 block">
        Spread radius
        <input
          type="range"
          name="points"
          min={50}
          max={350}
          step={50}
          defaultValue={DEFAULT_FACTOR}
          onChange={handleFactorSliderChange}
          tw="ml-3"
        />
      </label>
      <label tw="my-4 block">
        Circle radius
        <input
          type="range"
          name="points"
          min={8}
          max={16}
          step={2}
          defaultValue={DEFAULT_RADIUS}
          onChange={handleRadiusSliderChange}
          tw="ml-3"
        />
      </label>
    </>
  )
}
