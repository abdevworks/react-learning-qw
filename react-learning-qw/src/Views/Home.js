import React, {useEffect, useState} from "react";
import BannerAd from "../Components/BannerAd";
import HotDeal from "../Components/HotDeal";
import ProductList from "../Components/ProductList";
import HorizotalScrollingMenu from "../Components/HorizontalScrollingMenu";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    let content = <ProductList url={url} />;


    return(
        <>
            <div className="bg-white p-4">
                <BannerAd />
                <HotDeal />
            </div>

            <div className="my-3 bg-white p-4">
                <h1 className="font-bold text-2xl">
                    Best Sellers
                </h1>
                {content}
            </div>

            {/* <div className="my-3 bg-white p-4">
                <HorizotalScrollingMenu />
            </div> */}
        </>
    );
}

export default Home;