import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo"

export default function Footer(){
    return(
        <div>
            <ContactInfo />
            <footer className="bg-white text-center text-xs p-3 absolute bottom-0 w-full">
                &copy; Copyright 2021
            </footer>
        </div>

    );
}