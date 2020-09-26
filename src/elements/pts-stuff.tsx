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
import { useSpring } from 'react-spring'

import { useEffect, useRef } from 'react'

export const PtsStuff = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  const xRef = useRef<number>(0)

  useSpring({
    from: {
      x: 0,
    },
    x: 160,
    loop: {
      reverse: true,
    },
    config: {
      damping: 1,
      frequency: 0.4,
    },
    onChange: {
      x(v: number) {
        xRef.current = v
      },
    },
  })

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current
    if (canvasContainer == null) return

    // fast-refresh re-runs this effect so Pts lib inserts new canvas el
    // inside it, clearing out fixes it.
    canvasContainer.innerHTML = ''

    const space = new CanvasSpace(canvasContainer)
      .setup({ bgcolor: (theme`colors.sky.gray-100` as unknown) as string })
      // .bindMouse()
      // .bindTouch()
      .play()
    const form = space.getForm()

    const gradToTopRight = space.ctx.createLinearGradient(
      space.center.x - 80,
      space.center.y + 80,
      space.center.x + 80,
      space.center.y - 80
    )
    gradToTopRight.addColorStop(0, '#c15d2bdd')
    gradToTopRight.addColorStop(1, '#ad3dabdd')

    const gradToBottomRight = space.ctx.createLinearGradient(
      space.center.x - 80,
      space.center.y - 80,
      space.center.x + 80,
      space.center.y + 80
    )
    gradToBottomRight.addColorStop(0, '#c8aa6d66')
    gradToBottomRight.addColorStop(1, '#ece9c866')

    space.add((time, ftime) => {
      if (time == null) return

      // form.fill(grad).rect(space.innerBound)
      // const circ1 = Circle.fromCenter(space.center, 80 * 2)
      const circ1 = Circle.fromCenter(space.center, xRef.current)
      form.fill(gradToTopRight).circle(circ1)

      // const circ2 = Circle.fromCenter(space.center, 80 * 2)
      const circ2 = Circle.fromCenter(space.center, (xRef.current + 40) * 1.2)
      form.fill(gradToBottomRight).circle(circ2)
    })

    return () => {
      space.dispose()
    }
  }, [])

  return (
    <div tw="border-2 inline-block">
      <div
        ref={canvasContainerRef}
        css={css`
          height: 480px;
          width: 480px;
        `}
      />
    </div>
  )
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
