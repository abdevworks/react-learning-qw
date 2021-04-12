import React, {useState} from "react";
import {Link} from "react-router-dom";

//border mb-4 rounded overflow-hidden"
function ProductCard(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return(
        <div className={`max-w-md mx-0.5 my-3 w-72 bg-white rounded-xl ${isHovered ? "shadow-md" : ""} overflow-hidden md:max-w-2xl`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="md:flex">

                <Link 
                to={`/products/${props.product.id}`}
                className="md:w-2/5"
                >
                    <div className="md:flex-shrink-0">
                        <img alt='product item' className="h-64 w-full object-cover md:w-md"  src={props.product.images[0].image} draggable="false"  />
                    </div>
                </Link>

                <div className="p-3 w-full md:w-3/5 md:flex md:flex-col md:justify-between ">

                    <h3 className="font-bold text-xl mb-3">
                        <Link to={`/products/${props.product.id}`} draggable="false" >
                            {props.product.name}
                        </Link>
                    </h3>

                    <div className="font-bold mb-3" draggable="false">
                        $ {props.product.price}
                    </div>

                    {/* <div className="mb-3">
                        {props.product.description}
                    </div> */}

                    <Link 
                    to={`/products/${props.product.id}`} 
                    className="bg-blue-500 text-white p-2 flex justify-center w-full" draggable="false" >
                        View
                    </Link> 

                </div>
            </div>
        </div>
    );
}

export default ProductCard;