import React from 'react';
import NavigationMenuCategory from '../../Views/NavigationMenuCategory';
import ComputerIcon from "../../Icons/ComputerIcon.svg";
import smartphone from "../../Icons/smartphone.png";
import gameController from "../../Icons/gameController.png";
import videoCard from "../../Icons/videoCard.png";
import printer from "../../Icons/printer.png";
import tv from "../../Icons/tv.png";
import home from "../../Icons/home.png";
import usb from "../../Icons/usb.png";

const categories =[
    {
        id: 1,
        name: 'Laptops and Computers',
        icon: ComputerIcon
    },
    {
        id: 2,
        name: 'Smartphones & Smartwatches',
        icon: smartphone
    },
    {
        id: 3,
        name: 'Gaming & Streaming',
        icon: gameController
    },
    {
        id: 4,
        name: 'PC Parts',
        icon: videoCard
    },
    {
        id: 5,
        name: 'Peripherials',
        icon: printer
    },
    {
        id: 6,
        name: 'TV & Audio',
        icon: tv
    },
    {
        id: 7,
        name: 'Smarthome & Lifestyle',
        icon: home
    },
    {
        id: 8,
        name: 'Accessories',
        icon: usb
    }
];

export default function NavigationMenu(props){
    return(
        <div className="flex shadow-sm h-12 bg-gray-100 px-4 lg:px-10">
            {categories.map(category =>{
                return <NavigationMenuCategory key={category.id} category={category} />
            })}

        </div>
    );
}