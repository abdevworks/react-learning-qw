import React, {useState} from 'react';

export default function NavigationMenuCategory(props){
    const {name,icon} = props.category;

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return (
        <div className={`px-2 text-sm w-full flex items-center cursor-pointer rounded-xl ${isHovered ? "shadow-md bg-white" : ""}`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="w-9 h-9 pr-2 flex justify-center items-center">
                <img  className="h-auto w-full" alt="appLogo" src={icon} />
            </div>
            <div className="leading-4">{name}</div>
        </div>
    )
}