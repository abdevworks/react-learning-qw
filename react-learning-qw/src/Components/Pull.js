import React, { useState} from 'react'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function calculateDragBounds(){
    let dragBound = cards.length * 44 * 0.25 * 16 + 6*2*0.25*16- windowWidth;
    return dragBound;
  }

  window.addEventListener("resize", function() {
    setWindowWidth(window.innerWidth);
  });


  const bind = useDrag(({ down, offset: [ox], tap }) => {
    if (tap) alert('tap!')
    set({ x: ox, immediate: down })
  },
  {
    bounds: { left: -(calculateDragBounds()), right: 0},
    rubberband: true,
    filterTaps: true
  });

  function handleProductSelection(){
    alert("Product was selected!");
  }

  return (
    <div className="h-60  w-full overflow-hidden" >
      <animated.div className=" h-60 flex" {...bind()} style={{ x }}>
        {cards.map((card, key) => {
          return <img key={key }src={card} className="px-1 w-44" draggable="false" alt="product" onClick={handleProductSelection}/>
        })}
      </animated.div>
    </div>

  );
}