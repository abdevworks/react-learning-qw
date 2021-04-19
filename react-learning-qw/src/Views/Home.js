import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import ProductList from "../Components/ScrollingProductList/ProductList";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    let bestSellerList = <ProductList url={url} />;


    return(
        <>
            <div className="bg-white p-4 lg:px-10 shadow-inner">
                <BannerAd />
                <HotDeal />
            </div>

            <div className="my-3 bg-white px-4 lg:px-10 pt-4 pb-8">
                <h1 className="font-bold text-2xl pb-3">
                    Best Sellers
                </h1>
                {bestSellerList}
            </div>
        </>
    );
}

export default Home;