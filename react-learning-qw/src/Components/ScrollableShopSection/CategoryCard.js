import React, {useState} from "react";
import {Link} from "react-router-dom";


function CategoryCard(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return(
        <div className={`h-72 w-full p-2 m-auto lg:mb-4  overflow-hidden select-none cursor-pointer rounded-xl`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="flex flex-col h-full">
                <div 
                //to={`/products/${props.product.id}`}
                className="h-2/3 overflow-hidden flex items-center justify-center border border-gray-200 shadow-sm rounded-lg"
                >
                    <div className="px-1 w-40">
                        <img alt='product item' className="w-full"  src={props.product.images[0].image} draggable="false"  />
                    </div>
                </div>

                <div className="h-1/3 px-2 w-full flex flex-col justify-between">

                    <div className="text-lg font-semibold leading-tight pt-2">
                        <Link to={`/products/${props.product.id}`} draggable="false" >
                            {props.product.name}
                        </Link>
                    </div>

                    <div className=" text-sm text-gray-500" draggable="false">
                        {props.product.price}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CategoryCard;