import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import ProductCard from './ScrollingProductList/ProductCard'


export default function ScrollableList(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {productData} = props;

  function calculateDragBounds(){
    let dragBound = productData.length * 40 * 0.25 * 16 + 6*2*0.25*16- windowWidth;
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

  // function handleProductSelection(){
  //   alert("Product was selected!");
  // }

  return (
    <div className="overflow-hidden">
      <animated.div className="flex" {...bind()} style={{ x }}>
        {productData.map((product,key)=>{
          return <div key={key}><ProductCard product={product} /></div>
        })}
      </animated.div>
    </div>

  );
}