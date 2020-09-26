import tw, { theme, css } from 'twin.macro'
import {
  CanvasSpace,
  Num,
  Rectangle,
  Triangle,
  Pt,
  PtsCanvasRenderingContext2D,
  Circle,
  Group,
} from 'pts'

import { useEffect, useRef } from 'react'

export const PtsStuff = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas == null) return

    // canvas. = 500

    const space = new CanvasSpace(canvas)
      .setup({ bgcolor: (theme`colors.sky.gray-100` as unknown) as string })
      // .bindMouse()
      // .bindTouch()
      .play()
    const form = space.getForm()

    space.add((time, ftime) => {
      if (time == null) return

      /* const grad = space.ctx.createRadialGradient(
        space.center.x,
        space.center.y,
        0,
        space.center.x,
        space.center.y,
        50
      ) */
      const grad = space.ctx.createLinearGradient(
        space.center.x - 40,
        space.center.y + 40,
        space.center.x + 40,
        space.center.y - 40
      )
      grad.addColorStop(0, '#c15d2b')
      grad.addColorStop(0.3, '#c8aa6d')
      grad.addColorStop(0.7, '#ece9c8')
      grad.addColorStop(1, '#ad3dab')

      /*
        #c15d2b bottom left
        #c8aa6d
        #ece9c8
        #ad3dab top right
      */

      // form.fill(grad).rect(space.innerBound)
      const circ = Circle.fromCenter(space.center, 50)
      form.fill(grad).circle(circ)
    })

    return () => {
      space.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} tw="border" />
}

/* 
  let p:Pt = new Pt(1,2,3);
  let p2 = p.map( (d) => d+1 ); // typescript thinks p2 is Float32Array
  let p3 = p.map( (d) => d+1 ) as Pt; // type is now cast back to Pt
*/

/* space.add((time, ftime) => {
  if (time == null) return
  const rect = Rectangle.fromCenter(space.center, space.size.$divide(2))
  const poly = Rectangle.corners(rect)
  form.fillOnly('#123').polygon(poly)
  form.fill('#123').point(space.pointer, 5)
}) */
