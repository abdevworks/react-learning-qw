import React, {useState} from "react";
import {Link} from "react-router-dom";

//border mb-4 rounded overflow-hidden"
function ProductCard(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return(
        <div className={`h-48 w-40 ${isHovered ? "shadow-md" : ""} overflow-hidden select-none cursor-pointer`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="flex flex-col h-full ">
                <div 
                //to={`/products/${props.product.id}`}
                className="h-3/5"
                >
                    <div className="px-2">
                        <img alt='product item' className="w-full object-cover"  src={props.product.images[0].image} draggable="false"  />
                    </div>
                </div>

                <div className="h-2/5 px-2 w-full flex flex-col justify-between">

                    <span className="text-sm">
                        <Link to={`/products/${props.product.id}`} draggable="false" >
                            {props.product.name}
                        </Link>
                    </span>

                    <div className=" text-sm" draggable="false">
                        $ {props.product.price}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ProductCard;