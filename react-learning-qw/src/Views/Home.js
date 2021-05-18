import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import DataProvider from "../Components/ProductDataProvider/DataProvider";
import Customers from "../Components/customers/customers.js";
import ScrollableList from "../Components/ScrollingProductList/ScrollableList"; 


function Home(){

    //const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    const productUrl = `/api/products`;
    const hotDealUrl = `/api/hot_deal`;

    const bestSellerList = <DataProvider url={productUrl} component={ScrollableList}/>;
    const hotDealElement = <DataProvider url={hotDealUrl} component={HotDeal}/>;


    return(
        <div className="bg-white">
            <div className="m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                <BannerAd />
                <div className="pb-4 bg-gray-100 lg:grid lg:grid-cols-12 lg:border-gray-300 lg:border-b ">
                    <div className="mb-4 bg-white p-5 mt-3 min-w-max lg:col-span-4 lg:mt-0 lg:pl-8 lg:pr-0">
                        {hotDealElement}
                    </div>
    
                    <div className="mb-4 pt-4 pb-8 bg-white p-5 lg:col-span-8 lg:my-0 lg:pt-5 lg:pr-8">
                        <h1 className="font-bold text-2xl lg:pt-3 lg:border-gray-300 lg:border-t">
                            Best Sellers
                        </h1>
                        {bestSellerList}
                    </div>

                    <Customers />

                </div>
            </div>
        </div>
    );
}

export default Home;