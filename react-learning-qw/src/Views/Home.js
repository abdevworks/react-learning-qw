import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";
import BannerAd from "../Components/BannerAd";
import HotDeal from "../Components/HotDeal";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;

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
        console.log(products.data);
        content =
        <div className="flex flex-wrap">
            {
            products.data.map((product) => 
            <div key={product.id}>
                <ProductCard
                    product={product}
                 />
            </div>
            )}
        </div>
    }


    return(
        <>
            <div className="bg-white p-4">
                <BannerAd />
                <HotDeal />
            </div>

            <div className="my-3 bg-white">
                <h1 className="font-bold text-2xl">
                    Best Sellers
                </h1>
                {content}
            </div>
        </>
    );
}

export default Home;