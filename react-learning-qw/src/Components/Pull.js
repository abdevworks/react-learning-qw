import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const cards = [
  'https://images.pexels.com/photos/4646228/pexels-photo-4646228.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/2734305/pexels-photo-2734305.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/3873786/pexels-photo-3873786.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5847448/pexels-photo-5847448.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6213669/pexels-photo-6213669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6679926/pexels-photo-6679926.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/7082446/pexels-photo-7082446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5651679/pexels-photo-5651679.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
];

export default function Pull() {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const bind = useDrag(({ down, offset: [ox] }) => set({ x: ox, immediate: down }), {
    bounds: { left: -830, right: 0},
    rubberband: true,
  })

  return (
    <div className=" h-60 bg-red-200 w-full flex overflow-hidden">
      <animated.div className=" h-60 w-full flex" {...bind()} style={{ x }}>
        {cards.map(card => {
          return <img src={card} className="p-1" draggable="false"/>
        })}
      </animated.div>
    </div>

  );
}