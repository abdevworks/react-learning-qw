import React, {useState, useEffect, useRef} from "react";
import {useTransition, animated} from 'react-spring';



const slides = [
    { id: 0, url: 'photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80' },
    { id: 1, url: 'photo-1605719124118-58056ae4ed2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { id: 2, url: 'photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80' },
    { id: 3, url: 'photo-1544244015-0df4b3ffc6b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1303&q=80' },
];

export default function BannerAd(){

    const [index, set] = useState(0); //slide index
    const  [direction, setDirection] = useState(1); //animation direction
    const transitions = useTransition(slides[index], item => item.id, {
        from: {opacity: 0, transform: `translateX(${100 * direction}%)` },
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `translateX(${-100 * direction}%)` },
    });

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setDirection(1);
            set(state => (state + 1) % slides.length);
        }, 5000);
        return ()=>{
            //cleanup function
            clearInterval(intervalId);
        }
    },[]);


    function handleRightClick(){
        setDirection(1);
        set(state => (state + 1) % slides.length);
    }

    function handleLeftClick(){
        setDirection(-1);
        if(index > 1){
            set(state => (state - 1) % slides.length); 
        }else{
            set(slides.length-1);
        }
        
    }

    return(
        <div className="flex items-center rounded-xl overflow-hidden shadow-lg">
            
            <div 
                className="absolute z-10 left-0 border-1 border-black rounded-full h-10 w-10 flex items-center justify-center font-bold bg-white shadow-md cursor-pointer  select-none" 
                onClick={handleLeftClick}>
                {"<"}
            </div>

            <div className="h-40 relative">
                {
                transitions.map(({ item, props, key }) => (
                    <animated.div
                        key={key}
                        className="h-44 w-screen bg-cover bg-center absolute"
                        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url})`}}
                    />
                ))}
            </div>

            <div 
                className="absolute z-10 right-0 border-1 border-black rounded-full h-10 w-10 flex items-center justify-center  font-bold bg-white shadow-md cursor-pointer select-none" 
                onClick={handleRightClick}>
                {">"}
            </div>
        </div>

    );
}
