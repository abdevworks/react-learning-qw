import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import DataProvider from "../Components/ProductDataProvider/DataProvider";
import ScrollableList from "../Components/ScrollableShopSection/ScrollableList"; 
import Customers from "../Components/customers/customers.js";
import ShopSection from "../Components/ScrollableShopSection/ShopSection";
import ProductCard from '../Components/ScrollableShopSection/ProductCard';
import CategoryCard from '../Components/ScrollableShopSection/CategoryCard';



function Home(){

    //const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    const productUrl = `/api/products`;
    const hotDealUrl = `/api/hot_deal`;

    const bestSellerList = <DataProvider url={productUrl} component={ScrollableList}/>;
    const recommendedList = <DataProvider url={productUrl} component={ScrollableList}/>;
    const hotDealElement = <DataProvider url={hotDealUrl} component={HotDeal}/>;


    return(
        <div className="bg-white">
            <div className="m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                <BannerAd />
                <div className="pb-4 bg-gray-100 lg:grid lg:grid-cols-12 lg:border-gray-300 lg:border-b ">
                    <div className="mb-4 bg-white p-5 mt-3 min-w-max lg:col-span-4 lg:mt-0 lg:pl-8 lg:pr-0">
                        {hotDealElement}
                    </div>
    
                    <ShopSection sectionName="Best Sellers" apiURL={productUrl}  componentCard={ProductCard} sectionLink={false}/>
                    <ShopSection sectionName="Recommended" apiURL={productUrl} componentCard={ProductCard}/>
                    <ShopSection sectionName="Guides" apiURL={productUrl} componentCard={CategoryCard}/>

                    <Customers />

                </div>
            </div>
        </div>
    );
}

export default Home;