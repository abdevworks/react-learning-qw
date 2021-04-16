import React, {useState} from 'react';

export default function NavigationMenuCategory(props){
    const {name,icon} = props.category;

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return (
        <div className={`p-2  text-sm w-full flex items-center cursor-pointer rounded-xl ${isHovered ? "shadow-md bg-white" : ""}`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div>{name}</div>
        </div>
    )
}