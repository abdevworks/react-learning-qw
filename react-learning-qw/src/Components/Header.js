import React from "react";
import Navigation from "./NavigationMenu/Navigation";
import NavigationMobile from "./NavigationMenu/NavigationMobile";
import CompanyLogo from "../CompanyLogo.png";
import {faPhone, faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from '../Views/HeaderIcon';

export default function Header(){
    return(
        <header className="border-b px-4 flex justify-between items-center md:flex-col md:items-start">
            <img className="w-16 h-16" src={CompanyLogo} />

            <div className="flex items-center h-full">
                <HeaderIcon iconType={faUser} iconText="Account"/>
                <HeaderIcon iconType={faShoppingBasket} iconText="Basket"/>
                <HeaderIcon iconType={faPhone} iconText="Contact"/>
                <NavigationMobile />
                <Navigation />
            </div>

        </header>
    );
}