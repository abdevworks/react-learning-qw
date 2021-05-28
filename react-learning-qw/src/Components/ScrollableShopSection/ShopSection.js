import React, {useState} from 'react';
import DataProvider from "../ProductDataProvider/DataProvider";
import ScrollableList from "./ScrollableList";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function ShopSection(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    const {sectionName, apiURL, componentCardSize = "small", sectionLink = true} = props;
    const itemList = <DataProvider url={apiURL} component={ScrollableList} componentCard={props.componentCard} componentCardSize={componentCardSize}/>;

    return(
        <div className="mb-4 pt-4 pb-8 bg-white p-5 lg:col-span-8 lg:my-0 lg:pt-5 lg:pr-8">
            <div className="flex items-center justify-between ">
                <h1 className="font-bold text-2xl pb-2 lg:pt-3 lg:border-gray-300 lg:border-t">
                    {sectionName}
                </h1>
                <div className={`
                select-none cursor-pointer rounded-full py-1 px-4 text-sm flex items-center
                ${sectionLink ? "" : "hidden"} 
                ${isHovered ? "bg-gray-100" : ""}`} 
                onMouseOver={handleHover} onMouseOut={handleHover}
                >
                <p className="pr-2">Show everything</p>
                <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>

            {itemList}
        </div>
    );
}