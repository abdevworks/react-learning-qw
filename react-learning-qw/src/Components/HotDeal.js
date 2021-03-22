import React, {useState} from "react";
import Pull from "./Pull";

export default function HotDeal(){

    const slides = [
        {id: 1, url: 'https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?cs=srgb&dl=pexels-jens-mahnke-844874.jpg&fm=jpg'}
    ];


    return (
        <div className="  mt-3 rounded-xl overflow-hidden border-2 border-pink-500 flex flex-col p-5" >
            <div className="w-full h-2/3 relative">
                <div>
                    <h1 className="text-2xl font-bold">Hot deal</h1>
                    <div className="h-60 w-60  mx-auto overflow-hidden pt-10">
                        <img 
                        src={slides[0].url}
                        className="object-cover h-full rounded-xl"/>
                    </div>
                </div>
                <span className="text-center block mt-3">Item Description</span>
                <div className="absolute top-0 right-0 z-10 bg-gray-500 text-white rounded-xl py-1 px-3">
                    <div className="text-center">Save</div>
                    <span className="text-center text-xl px-4">50 %</span>
                </div>
            </div>

            <div className="w-full h-1/3 my-3">
                <div>
                    <span className="block text-gray-500 text-center text-lg line-through">260,00 $</span>
                    <span className="block text-center text-pink-500 text-3xl font-bold">130,00 $</span>
                </div>
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
                <div className="flex flex-col items-center ">
                    <span>Hurry up, there's no much time left:</span>
                    <div className="flex">
                        <div>
                            <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">11</div>
                            <span className="block text-center">godz.</span>
                        </div>
                        <div className="flex justify-center px-2 text-2xl">:</div>
                        <div></div>
                        <div>
                            <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">04</div>
                            <span className="block text-center">min</span>
                        </div>
                        <div className="flex justify-center px-2 text-2xl">:</div>
                        <div>
                            <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">45</div>
                            <span className="block text-center">sek.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

        {/* <animated.div 
        className="bg-indigo-200 h-56 mt-3 rounded-xl overflow-hidden"
        {...bind()}
        style={{x, y}}
        >
            hot deal
        </animated.div> */}