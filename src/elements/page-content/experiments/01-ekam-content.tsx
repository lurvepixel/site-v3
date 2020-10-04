import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasForm, CanvasSpace, Geom, Rectangle } from 'pts'
import { useSpring, useSprings } from 'react-spring'

import { FC } from '~/shared/types'

const deg2rad = (n: number) => (n * (22 / 7)) / 180

const minMax = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

class ExpandedForm extends CanvasForm {
  glow(color: 'stroke' | 'fill' | string | undefined = undefined, spread = 10): this {
    let pickedColor = color

    if (color === 'stroke') {
      pickedColor = this._style.strokeStyle as string
    } else if (color === 'fill') {
      pickedColor = this._style.fillStyle as string
    }

    if (color === undefined) {
      if (typeof this._style.strokeStyle === 'string') {
        pickedColor = this._style.strokeStyle
      } else if (typeof this._style.fillStyle === 'string') {
        pickedColor = this._style.fillStyle
      } else {
        pickedColor = '#e45'
      }
    }

    this._ctx.shadowBlur = spread
    this._ctx.shadowColor = pickedColor!

    return this
  }
}

class ExapandedSpace extends CanvasSpace {
  public getForm(): ExpandedForm {
    return new ExpandedForm(this)
  }
}

export const EkamContent: FC = () => {
  // setup
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<ExapandedSpace | null>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new ExapandedSpace(canvasContainer)
      .setup({
        retina: true,
      })
      .bindMouse()
      .bindTouch()
      .play()
    space.background = '#444'

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
    n: 1,
    loop: { reverse: true },
    config: {
      frequency: 1.5,
      damping: 1,
    },
    // onChange(v) {
    //   console.log(v)
    // },
  })

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    space.add((t, td) => {
      const len = 18
      for (let i = 1; i <= len; ++i) {
        const center = [
          space.center.x,
          space.center.y + spring.n.to([0, 1], [-(10 + 15 * i), 10 + 15 * i]).get(),
        ]

        const rad = Geom.toRadian(
          spring.n.to([0, 0.5, 1], [-(10 + 5 * i), 0, 10 + 5 * i]).get()
        )

        const rect = Rectangle.fromCenter(center, 20 + 40 * i)
        const poly = Rectangle.corners(rect).rotate2D(rad, center)
        form.strokeOnly('#e45', 5, 'round').glow('#e45', 10).polygon(poly)
      }
    })
  }, [])

  return (
    <>
      <div
        ref={canvasContainerRef}
        css={css`
          /* cursor: none; */
          width: 480px;
          height: 480px;
        `}
      />
    </>
  )
}
