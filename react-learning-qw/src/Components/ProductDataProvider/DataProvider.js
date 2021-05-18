import React from "react";
import Loader from "./Loader";
import { useAxiosGet } from "../../Hooks/HttpRequests";


export default function ProductList(props){

    const url = props.url;
    let products = useAxiosGet(url);
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
        content = <props.component productData={products.data} />
    }

    return(
        content
    );
}