import Rect from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons";

export default function HeaderIcon(props){
    return(
        <div className="px-2 flex flex-col items-center">
            <FontAwesomeIcon icon={props.iconType}/>
            <div className="text-sm">{props.iconText}</div>
        </div>
    );
}