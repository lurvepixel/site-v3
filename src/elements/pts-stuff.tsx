import { theme } from 'twin.macro'
import { CanvasSpace, Num } from 'pts'

import { useEffect, useRef } from 'react'

export const PtsStuff = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current == null) return

    const space = new CanvasSpace(canvasRef.current)
      .setup({ bgcolor: (theme`colors.sky.gray-100` as unknown) as string })
      .bindMouse()
      .bindTouch()
      .play()
    const form = space.getForm()

    space.add(() => form.point(space.pointer, 10))

    return () => {
      space.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} tw="border" />
}
