import React from 'react';
import {faPhoneAlt, faEnvelope, faMapMarkerAlt, } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function ContactInfo(){
    return(
    <div className="p-5 border-gray-300 border-b grid ">
        <h2 className="mb-4 text-xl font-bold">Contact</h2>
        <div className="flex">
            <div className="flex items-center p-2 h-8 w-8">
                <FontAwesomeIcon icon={faPhoneAlt}/>
            </div>
            <p className="text-lg font-medium flex items-center">12 345 66 77</p>
        </div>

        <div className="flex text-xs pl-8">
            <div className="flex flex-col mr-2">
                <span>mon. - fri.</span>
                <span>sat. - sun.</span>
            </div>
            <div className="flex flex-col">
                <span>8:00 - 21:00</span>
                <span>8:00 - 19:00</span>
            </div>
        </div>
        <div className="flex py-1">
            <div className="flex items-center p-2 h-8 w-8">
                <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <p className="flex items-center text-sm">e-sell@e-sell.com</p>
        </div>
        <div className="flex py-1">
            <div className="flex items-center justify-center p-2 h-8 w-8">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </div>
            <p className="flex items-center text-sm">Store e-sell</p>
        </div>
        <div className="flex">
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
        </div>

    </div>
    );
}