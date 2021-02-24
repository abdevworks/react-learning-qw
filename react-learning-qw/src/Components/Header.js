import React from "react";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

export default function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center md:flex-col md:items-start">
            <span className="font-bold">
                AppName
            </span>
            <NavigationMobile />
            <Navigation />
        </header>
    );
}