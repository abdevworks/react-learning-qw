import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import ProductList from "../Components/ScrollingProductList/ProductList";
import Customers from "../Components/customers/customers.js";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    let bestSellerList = <ProductList url={url} />;




    return(
        <>
            <div className="m-auto bg-gray-100 lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                <BannerAd />
                <div className="lg:grid lg:grid-cols-12 lg:border-gray-300 lg:border-b ">
                    <div className="bg-white p-5 mt-3 min-w-max lg:col-span-4 lg:mt-0  lg:pl-8 lg:pr-0">
                        <HotDeal />
                    </div>
    
                    <div className="my-3 pt-4 pb-8 bg-white p-5 lg:col-span-8 lg:my-0 lg:pt-5 lg:pr-8">
                        <h1 className="font-bold text-2xl lg:pt-3 lg:border-gray-300 lg:border-t">
                            Best Sellers
                        </h1>
                        {bestSellerList}
                    </div>
                </div>
                <Customers />
            </div>
        </>
    );
}

export default Home;