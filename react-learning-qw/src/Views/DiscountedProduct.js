import React from "react";

export default function DiscountedProduct(){

    const slides = [
        {id: 1, url: 'https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?cs=srgb&dl=pexels-jens-mahnke-844874.jpg&fm=jpg'}
    ];

    return(
        <>
        <div className="h-64 w-64  mx-auto overflow-hidden pt-10">
                <img 
                src={slides[0].url}
                className="object-cover h-full rounded-xl"/>
            </div>

            <span className="text-center text-lg block mt-1">Item Description</span>
            <div className="mt-3">
                <span className="block text-gray-500 text-center text-lg line-through">260,00 $</span>
                <span className="block text-center text-pink-500 text-3xl font-bold">130,00 $</span>
        </div>
        </>
    );
}