import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


export default function ScrollableList(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {productData} = props;
  const numberOfProductsDisplayed = 8;

  function calculateDragBounds(){
    let dragBound = numberOfProductsDisplayed * 44 * 0.25 * 16 + 5*2*0.25*16- windowWidth;
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


  return (

    <div className="overflow-hidden pb-4">
        <animated.div className="grid grid-flow-col grid-cols-small md:grid-cols-md lg:grid-flow-row lg:grid-cols-4 lg:grid-rows-2" {...bind()} style={{ x }}>
          {productData.slice(0,numberOfProductsDisplayed).map((product)=>{
            return <div to={`/products/${product.id}`} key={product.id} draggable="false"><props.componentCard product={product} /></div>
          })}
        </animated.div>
    </div>


  );
}