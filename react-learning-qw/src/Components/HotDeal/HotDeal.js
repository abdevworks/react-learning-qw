import React from "react";
import StockUpadeBar from "./StockUpdateBar";
import CountdownTimer from "./CountdownTimer";
import DiscountedProduct from "../../Views/DiscountedProduct";


export default function HotDeal(){

    return (
        <div className=" mt-3 rounded-xl overflow-hidden border-2 border-pink-500 flex flex-col p-5" >
            <div className="w-full relative">
                <h1 className="text-2xl font-bold">Hot deal</h1>

                <div className="absolute top-0 right-0 z-10 bg-gray-500 text-white rounded-xl py-1 px-3">
                    <div className="text-center">Save</div>
                    <span className="text-center text-xl px-4">50 %</span>
                </div>
            </div>
            <DiscountedProduct />
            <div className="w-full">
                <StockUpadeBar />
                <div className="flex flex-col items-center mt-3">
                    <span className="mb-1">Hurry up, there's no much time left:</span>
                    <CountdownTimer />
                </div>
            </div>
        </div>
    );
}

