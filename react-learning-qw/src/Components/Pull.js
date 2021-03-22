import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

export default function Pull() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] })
  })

  return     <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
      className="w-12 h-12 bg-white"
    />
}