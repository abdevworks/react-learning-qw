import React from "react";
import ProgressBar from "./ProgressBar";

export default function StockUpadeBar(){
    return(
        <>
        <div className="flex justify-between">
            <div>
                <span className="mr-1 text-gray-600">in stock</span>
                <span className="text-xl font-bold">17</span>
            </div>
            <div className="">
                <span className="mr-1 text-gray-600">sold</span>
                <span className="text-xl font-bold">23</span>
            </div> 
        </div>
        <ProgressBar percent={0.65}/>
        </>
    );
}