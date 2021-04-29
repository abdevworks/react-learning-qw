import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import ProductList from "../Components/ScrollingProductList/ProductList";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    let bestSellerList = <ProductList url={url} />;




    return(
        <>
            <div className="m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                <BannerAd />
                <div className="lg:flex lg:border-gray-300 lg:border-b lg:pb-8">
                    <div className="bg-white p-5 mt-3 lg:mt-0 lg:w-4/12 lg:pl-10 lg:pr-0">
                        <HotDeal />
                    </div>
    
                    <div className="my-3 pt-4 pb-8 bg-white p-5 lg:w-8/12 lg:my-0 lg:pt-5">
                        <h1 className="font-bold text-2xl lg:border-gray-300 lg:border-t">
                            Best Sellers
                        </h1>
                        {bestSellerList}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;