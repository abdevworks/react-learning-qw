import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring';
import NavigationMenuMobile from "./NavigationMenuMobile";

export default function NavigationMobile(){

    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: {opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })


    return(
        <nav className="pl-4 flex flex-col items-center justify-center h-10 border-l cursor-pointer">
            <span className="text-xl md:hidden">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={()=>setShowMenu(!showMenu)}
                />
            </span>
            <div className="text-xs">Menu</div>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >

                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >

                        <NavigationMenuMobile 
                            closeMenu={() => setShowMenu(false)} 
                        />

                    </animated.div>
                )
            }
        </nav>
    );
}