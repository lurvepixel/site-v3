import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasSpace, Group, Pt } from 'pts'
import { useSpring } from 'react-spring'

import { FC } from '~/shared/types'

export const ZContent: FC = () => {
  // setup
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<CanvasSpace | null>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new CanvasSpace(canvasContainer)
      // .bindMouse().bindTouch()
      .play()

    spaceRef.current = space

    return () => {
      space.dispose()
      canvasContainer.innerHTML = ''
    }
  }, [])

  // animate stuff
  const [{ n }] = useSpring(() => ({
    from: {
      n: 30,
    },
    n: 80,
    loop: { reverse: true },
  }))

  useEffect(() => {
    const space = spaceRef.current

    if (space == null) return

    const form = space.getForm()

    space.add((t, td) => {
      form.fillOnly('#ee1').rect([
        [space.center.x - n.get(), space.center.y - n.get()],
        [space.center.x + n.get(), space.center.y + n.get()],
      ])
    })
  }, [n])

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
