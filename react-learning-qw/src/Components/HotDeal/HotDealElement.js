import React from "react";
import Loader from "../ScrollingProductList/Loader";
import { useAxiosGet } from "../../Hooks/HttpRequests";
import HotDeal from "../HotDeal/HotDeal";


export default function ProductList(props){

    const url = props.url;
    let products = useAxiosGet(url);
    console.log({products});
    let content = null;

    if(products.error){
        content = 
        <p>
            There was an error please refresh or try again later
        </p>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content = <HotDeal productData={products.data} />
    }

    return(
        content
    );
}