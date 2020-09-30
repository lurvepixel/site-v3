import { css } from 'twin.macro'
import { useEffect, useRef, useState } from 'react'
import { CanvasSpace } from 'pts'

import { FC } from '~/shared/types'

export const ZContent: FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    const space = new CanvasSpace(canvasContainer)
    const form = space.getForm()

    space.add((t, td) => {
      form.fillOnly('#ee1').rect(space.innerBound)
    })

    space
      // .bindMouse().bindTouch()
      .play()

    return () => {
      space.dispose()
      canvasContainer.innerHTML = ''
    }
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
