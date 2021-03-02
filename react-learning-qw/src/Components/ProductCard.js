import React from "react";
import {Link} from "react-router-dom";

//border mb-4 rounded overflow-hidden"
function ProductCard(props){

    return(
        <div className="max-w-md mx-auto my-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">

                <Link 
                to={`/products/${props.product.id}`}
                className="md:w-2/5"
                >
                    <div className="md:flex-shrink-0 ">
                        <img className="h-64 w-full object-cover md:w-md" src={props.product.images[0].image}/>
                    </div>
                </Link>

                <div className="p-3 w-full md:w-3/5 md:flex md:flex-col md:justify-between ">

                    <h3 className="font-bold text-xl mb-3">
                        <Link to={`/products/${props.product.id}`}>
                            {props.product.name}
                        </Link>
                    </h3>

                    <div className="font-bold mb-3">
                        $ {props.product.price}
                    </div>

                    {/* <div className="mb-3">
                        {props.product.description}
                    </div> */}

                    <Link 
                    to={`/products/${props.product.id}`} 
                    className="bg-blue-500 text-white p-2 flex justify-center w-full">
                        View
                    </Link> 

                </div>
            </div>
        </div>
    );
}

export default ProductCard;