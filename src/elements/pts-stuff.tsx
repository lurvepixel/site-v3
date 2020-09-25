import { theme } from 'twin.macro'
import { CanvasSpace, Num, Rectangle, Triangle } from 'pts'

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

    space.add((time, ftime) => {
      if (time == null) return
      const rect = Rectangle.fromCenter(space.center, space.size.$divide(2))
      const poly = Rectangle.corners(rect)
      poly.shear2D(Num.cycle((time % 5000) / 5000) - 0.5, space.center)

      // triangle
      const tris = poly.segments(2, 1, true)
      tris.map(t => t.push(space.pointer))

      // circ
      const circles = tris.map(t => Triangle.incircle(t))

      // drawing
      form.fillOnly('#123').polygon(poly)
      form.fill('#f03').circles(circles)
      form.strokeOnly('#fff ', 3).polygons(tris)
      form.fill('#123').point(space.pointer, 5)
    })

    return () => {
      space.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} tw="border" />
}
