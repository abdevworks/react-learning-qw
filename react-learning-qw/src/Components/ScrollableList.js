import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import ProductCard from './ScrollingProductList/ProductCard'
import {Link} from "react-router-dom";


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

  // function handleProductSelection(event){
  //   event.target.value(product.id);
  //   alert("Product was selected!");
  // }

  return (

    <div className="overflow-hidden py-4">
        <animated.div className="flex lg:flex-wrap" {...bind()} style={{ x }}>
          {productData.map((product)=>{
            return <Link to={`/products/${product.id}`} key={product.id} draggable="false"><ProductCard product={product} /></Link>
          })}
        </animated.div>
    </div>


  );
}