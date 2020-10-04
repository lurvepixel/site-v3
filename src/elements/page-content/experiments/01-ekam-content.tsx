import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasForm, CanvasSpace, Group, Pt, Geom, Rectangle, Const, GroupLike } from 'pts'
import { useSpring, useSprings } from 'react-spring'

import { FC } from '~/shared/types'

const deg2rad = (n: number) => (n * (22 / 7)) / 180

const minMax = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

class ExpandedForm extends CanvasForm {
  static rectWithGlow(ctx: CanvasRenderingContext2D, pts: GroupLike | number[][]) {
    if (pts.length < 2) return
    ctx.beginPath()
    ctx.moveTo(pts[0][0], pts[0][1])
    ctx.lineTo(pts[0][0], pts[1][1])
    ctx.lineTo(pts[1][0], pts[1][1])
    ctx.lineTo(pts[1][0], pts[0][1])
    ctx.shadowBlur = 10
    ctx.shadowColor = '#e41'
    ctx.closePath()
  }

  rectWithGlow(pts: number[][] | Pt[]): this {
    ExpandedForm.rect(this._ctx, pts)
    this._paint()
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

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    space.add((t, td) => {
      form.strokeOnly('#e45').rectWithGlow([
        [10, 10],
        [40, 40],
      ])
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
