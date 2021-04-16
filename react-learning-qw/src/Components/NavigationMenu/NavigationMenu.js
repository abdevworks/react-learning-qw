import React from 'react';
import NavigationMenuCategory from '../../Views/NavigationMenuCategory'

const categories =[
    {
        id: 1,
        name: 'Laptops and computers',
        icon: 'icon'
    },
    {
        id: 2,
        name: 'Smartphones and smartwatches',
        icon: 'icon'
    },
    {
        id: 3,
        name: 'Gaming and streaming',
        icon: 'icon'
    },
    {
        id: 4,
        name: 'PC parts',
        icon: 'icon'
    },
    {
        id: 5,
        name: 'Peripherials',
        icon: 'icon'
    },
    {
        id: 6,
        name: 'TV and audio',
        icon: 'icon'
    },
    {
        id: 7,
        name: 'Smarthome and lifestyle',
        icon: 'icon'
    },
    {
        id: 8,
        name: 'Accessories',
        icon: 'icon'
    }
];

export default function NavigationMenu(props){
    return(
        <div className="flex shadow-sm h-12 bg-gray-100 lg:px-0">
            {categories.map(category =>{
                return <NavigationMenuCategory key={category.id} category={category} />
            })}

        </div>
    );
}