import React from "react";
import {Link} from "react-router-dom";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {navigationMenuCategories} from "../NavigationMenuCategories/navigationMenuCategories";
import NavigationMenuCategory from '../../Views/NavigationMenuCategory';

export default function NavigationMenuSideCategories(props){
    
    return(
        <nav>
            <div className="px-5 py-3 font-bold text-lg bg-gray-100  flex">
                <div className="text-xl text-gray-600">
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <h1 className="pl-4">Menu</h1>
            </div>

            <ul className="px-3">
                <li className="px-2 text-gray-500 font-semibold text-sm py-3 border-t border-b block" >
                    Categories
                </li>

                {navigationMenuCategories.map(category =>{
                    return (
                        <li className="py-3">
                            <NavigationMenuCategory key={category.id} category={category} />
                        </li>
                        );
                })}

                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3  border-b block" 
                        onClick={props.closeMenu}
                        >
                            Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block" 
                        onClick={props.closeMenu}
                        >
                            About
                    </Link>
                </li>
            </ul>
        </nav>

    );
}