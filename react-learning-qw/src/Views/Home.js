import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import ProductList from "../Components/ScrollingProductList/ProductList";


function Home(){

    const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    let bestSellerList = <ProductList url={url} />;


    return(
        <>
            <div className="p-4 lg:px-10 shadow-inner">
                <BannerAd />
                <div>
                    <HotDeal />
                    <div className="bg-gray-50 h-5 border-t border-b border-gray-200"></div>
                    <div className="my-3 pt-4 pb-8">
                        <h1 className="font-bold text-2xl pb-3">
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