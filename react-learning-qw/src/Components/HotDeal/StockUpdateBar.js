import React from "react";
import ProgressBar from "./ProgressBar";

export default function StockUpadeBar(){

    const {inStock, sold} = {inStock: 23, sold: 23};
    const totalItemCount = inStock + sold;
    const percent = inStock / totalItemCount;
    return(
        <>
        <div className="flex justify-between">
            <div>
                <span className="mr-1 text-gray-600">in stock</span>
                <span className="text-xl font-bold">{inStock}</span>
            </div>
            <div className="">
                <span className="mr-1 text-gray-600">sold</span>
                <span className="text-xl font-bold">{sold}</span>
            </div> 
        </div>
        <ProgressBar percent={percent}/>
        </>
    );
}