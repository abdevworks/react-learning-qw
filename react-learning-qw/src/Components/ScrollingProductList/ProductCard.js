import React, {useState} from "react";
import {Link} from "react-router-dom";

//border mb-4 rounded overflow-hidden"
function ProductCard(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return(
        <div className={`w-40 h-60 bg-white ${isHovered ? "shadow-md" : ""} overflow-hidden select-none cursor-pointer`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="md:flex">

                <Link 
                to={`/products/${props.product.id}`}
                className="md:w-2/5"
                >
                    <div className="md:flex-shrink-0">
                        <img alt='product item' className="w-full object-cover"  src={props.product.images[0].image} draggable="false"  />
                    </div>
                </Link>

                <div className="p-3 w-full">

                    <span className="text-sm mb-3">
                        <Link to={`/products/${props.product.id}`} draggable="false" >
                            {props.product.name}
                        </Link>
                    </span>

                    <div className="font-bold mb-3" draggable="false">
                        $ {props.product.price}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ProductCard;