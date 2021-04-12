import React from "react";

export default function DiscountedProduct(){

    const slides = [
        {id: 1, url: 'https://images.unsplash.com/photo-1588434013438-e1dd134eda16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'}
    ];

    return(
        <>
            <div className="flex justify-center h-64 w-64  mx-auto overflow-hidden pt-10">
                <img 
                src={slides[0].url}
                className="object-co h-full rounded-xl"
                alt="discounted product"/>
            </div>

            <span className="text-center text-lg block mt-1">Item Description</span>
            <div className="mt-3">
                <span className="block text-gray-500 text-center text-lg line-through">260,00 $</span>
                <span className="block text-center text-pink-500 text-3xl font-bold">130,00 $</span>
            </div>
        </>
    );
}