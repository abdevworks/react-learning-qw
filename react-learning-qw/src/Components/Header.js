import React from "react";
import Navigation from "./NavigationMenu/Navigation";
import NavigationMobile from "./NavigationMenu/NavigationMobile";
import CompanyLogo from "../CompanyLogo.png";
import {faPhone, faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from '../Views/HeaderIcon';

export default function Header(){
    return(
        <header className="border-b md:flex-col md:items-start">

            <div className="flex px-4 justify-between items-center ">
                <img className="w-16 h-16" alt="appLogo" src={CompanyLogo} />
                <div className="flex items-center h-10">
                    <HeaderIcon iconType={faUser} iconText="Account"/>
                    <HeaderIcon iconType={faShoppingBasket} iconText="Basket"/>
                    <HeaderIcon iconType={faPhone} iconText="Contact"/>
                    <NavigationMobile/>
                </div>
            </div>

            <Navigation />
            



        </header>
    );
}